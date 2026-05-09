import { readFile } from 'fs/promises';
import { bahtTextForCertificate } from '../baht-text';
import { renderPdfFromXlsx } from '../pdf-from-xlsx';
import { DIVIDEND_RULES, type DividendSubOption } from './wht-50-tawi-dividend-rules';
import {
  getRequiredWorksheet,
  loadWorkbookTemplate,
  resolveEaMiniAppPath,
  workbookToBuffer,
  writeCells,
} from '../xlsx-filler';

export type PayerPayeeType = 'บุคคล' | 'นิติบุคคล' | 'บริษัท' | 'สมาคม' | 'คณะบุคคล';
export type PndType = '1k' | '1k-special' | '2' | '2k' | '3' | '3k' | '53';
export type PaymentCondition = 'withhold' | 'pay-forever' | 'pay-once' | 'other';
export type IncomeType =
  | 'salary'
  | 'commission'
  | 'royalty'
  | 'interest'
  | 'dividend'
  | 'service'
  | 'rent'
  | 'advertising'
  | 'transport'
  | 'professional_fee'
  | 'other';

export type WhtData = {
  bookNo?: string;
  certificateNo: string;
  payerCitizenId?: string;
  payerTaxId: string;
  payerName: string;
  payerType: PayerPayeeType;
  payerAddress: string;
  payeeCitizenId?: string;
  payeeTaxId?: string;
  payeeName: string;
  payeeType: PayerPayeeType;
  payeeAddress: string;
  sequenceNo: number;
  pndType?: PndType | string;
  incomeType: IncomeType;
  incomeSubtype?: DividendSubOption | string;
  incomeTypeOther?: string;
  paymentDate: Date | string;
  baseAmount: number;
  whtRate?: number;
  paymentCondition?: PaymentCondition | 'pay_once' | 'pay_forever';
  paymentConditionOther?: string;
  pfLicenseNo?: string;
  pfAmount?: number;
  socialSecAmount?: number;
  employerAccountNo?: string;
  signerName: string;
  issuedDate: Date | string;
  embedStamp?: boolean;
  policyKey?: string;
  incomePolicyKey?: string;
};

export type FilledComplianceDocument = {
  xlsxBuffer: Buffer;
  pdfBuffer: Buffer;
  fileName: string;
};

type WhtPolicy = {
  wht_certificate_policy: {
    version: string;
    default_pnd_mapping: Record<string, string>;
    default_wht_rate_mapping: Record<string, number>;
    payment_condition: {
      default: string;
    };
  };
};

type NormalizedWhtData = Omit<WhtData, 'paymentDate' | 'issuedDate' | 'pndType' | 'whtRate' | 'paymentCondition'> & {
  paymentDate: Date;
  issuedDate: Date;
  pndType: PndType;
  whtRate: number;
  paymentCondition: PaymentCondition;
};

const TEMPLATE_FILE = 'WHT_50_TAWI_OFFICIAL.xlsx';
const POLICY_FILE = 'wht-policy.json';
const WHT_SHEET_NAME = '3%';

const PND_X_MARK_CELLS: Record<PndType, string> = {
  '1k': 'H16',
  '1k-special': 'J16',
  '2': 'M16',
  '2k': 'O16',
  '3': 'H18',
  '3k': 'J18',
  '53': 'M18',
};

const INCOME_ROWS: Record<IncomeType, number> = {
  salary: 23,
  commission: 24,
  royalty: 25,
  interest: 26,
  dividend: 27,
  service: 45,
  rent: 45,
  advertising: 45,
  transport: 45,
  professional_fee: 45,
  other: 46,
};

const SERVICE_ROW_LABELS: Partial<Record<IncomeType, string>> = {
  rent: 'ค่าเช่า',
  advertising: 'ค่าโฆษณา',
  transport: 'ค่าขนส่ง',
  professional_fee: 'ค่าวิชาชีพ',
};

export async function fillWht50Tawi(data: WhtData): Promise<FilledComplianceDocument> {
  const policy = await loadWhtPolicy();
  const normalized = normalizeWhtData(data, policy);
  validateWhtData(normalized);

  const templatePath = resolveEaMiniAppPath('templates', TEMPLATE_FILE);
  const workbook = await loadWorkbookTemplate(templatePath);
  const worksheet = getRequiredWorksheet(workbook, WHT_SHEET_NAME);
  const row = resolveIncomeRow(normalized);
  const whtAmount = roundTo2(normalized.baseAmount * (normalized.whtRate / 100));

  clearTemplateExampleCells(worksheet);
  writeCells(worksheet, [
    { cell: 'P2', value: normalized.bookNo ?? '', skipBlank: true },
    { cell: 'Q3', value: normalized.certificateNo },
    { cell: 'P5', value: normalized.payerCitizenId ? formatTaxId(normalized.payerCitizenId) : '- ---- ----- -- -' },
    { cell: 'P6', value: formatTaxId(normalized.payerTaxId) },
    { cell: 'C6', value: withTypePrefix(normalized.payerType, normalized.payerName) },
    { cell: 'C8', value: normalized.payerAddress },
    { cell: 'P11', value: normalized.payeeCitizenId ? formatTaxId(normalized.payeeCitizenId) : '- ---- ----- -- -' },
    { cell: 'P12', value: normalized.payeeTaxId ? formatTaxId(normalized.payeeTaxId) : '- ---- ----- -- -' },
    { cell: 'C12', value: withTypePrefix(normalized.payeeType, normalized.payeeName) },
    { cell: 'C14', value: normalized.payeeAddress },
    { cell: 'B16', value: String(normalized.sequenceNo) },
    { cell: PND_X_MARK_CELLS[normalized.pndType], value: 'X' },
    { cell: `M${row}`, value: formatThaiDate(normalized.paymentDate) },
    { cell: `O${row}`, value: normalized.baseAmount },
    { cell: `Q${row}`, value: { formula: `ROUND(O${row}*${normalized.whtRate}%,2)`, result: whtAmount } },
    { cell: 'I50', value: bahtTextForCertificate(whtAmount) },
    { cell: 'G58', value: normalized.signerName },
    { cell: 'G59', value: formatThaiDate(normalized.issuedDate) },
    { cell: 'O52', value: normalized.pfAmount, skipBlank: true },
    { cell: 'L53', value: normalized.socialSecAmount, skipBlank: true },
  ]);

  writeIncomeLabel(worksheet, normalized);
  writePaymentCondition(worksheet, normalized);
  addStampIfRequested(workbook, worksheet, normalized.embedStamp);

  const xlsxBuffer = await workbookToBuffer(workbook);
  const pdfBuffer = await renderPdfFromXlsx(xlsxBuffer);

  return {
    xlsxBuffer,
    pdfBuffer,
    fileName: `${normalized.certificateNo}.xlsx`,
  };
}

export function deriveWhtPolicy(data: WhtData, policy: WhtPolicy): Pick<NormalizedWhtData, 'pndType' | 'whtRate' | 'paymentCondition'> {
  return {
    pndType: normalizePndType(
      data.pndType ??
        policy.wht_certificate_policy.default_pnd_mapping[derivePndPolicyKey(data)]
    ),
    whtRate:
      data.whtRate ??
      policy.wht_certificate_policy.default_wht_rate_mapping[deriveRatePolicyKey(data)] ??
      policy.wht_certificate_policy.default_wht_rate_mapping.service,
    paymentCondition: normalizePaymentCondition(
      data.paymentCondition ?? policy.wht_certificate_policy.payment_condition.default
    ),
  };
}

async function loadWhtPolicy(): Promise<WhtPolicy> {
  const policyPath = resolveEaMiniAppPath('src', 'config', POLICY_FILE);
  return JSON.parse(await readFile(policyPath, 'utf8')) as WhtPolicy;
}

function normalizeWhtData(data: WhtData, policy: WhtPolicy): NormalizedWhtData {
  return {
    ...data,
    paymentDate: coerceDate(data.paymentDate, 'paymentDate'),
    issuedDate: coerceDate(data.issuedDate, 'issuedDate'),
    ...deriveWhtPolicy(data, policy),
  };
}

function validateWhtData(data: NormalizedWhtData): void {
  const errors: string[] = [];
  if (!data.certificateNo) errors.push('ระบุเลขที่หนังสือรับรอง');
  if (!data.payerName) errors.push('ระบุชื่อบริษัทผู้หักภาษี');
  if (!isThirteenDigitId(data.payerTaxId)) errors.push('ใส่เลขประจำตัวผู้เสียภาษี 13 หลัก');
  if (!data.payerAddress) errors.push('ระบุที่อยู่ผู้หักภาษี');
  if (!data.payeeName) errors.push('ระบุชื่อผู้ถูกหักภาษี');
  if (!data.payeeAddress) errors.push('ระบุที่อยู่ผู้ถูกหักภาษี');
  if (!isThirteenDigitId(data.payeeTaxId) && !isThirteenDigitId(data.payeeCitizenId)) {
    errors.push('ใส่เลขประจำตัวผู้เสียภาษี/ประชาชน 13 หลัก');
  }
  if (!Number.isFinite(data.baseAmount) || data.baseAmount <= 0) errors.push('ใส่จำนวนเงินที่จ่าย');
  if (!Number.isFinite(data.whtRate) || data.whtRate <= 0 || data.whtRate > 100) {
    errors.push('ใส่อัตรา WHT (เช่น 3 = 3%)');
  }
  if (!data.sequenceNo && data.sequenceNo !== 0) errors.push('ระบุลำดับที่');
  if (data.paymentCondition === 'other' && !data.paymentConditionOther) {
    errors.push('ระบุเงื่อนไขการจ่ายอื่นๆ');
  }
  if (data.incomeType === 'dividend' && !resolveDividendRule(data.incomeSubtype)) {
    errors.push('เลือกประเภทเงินปันผล 40(4)(ข) เช่น credit_20 หรือ no_credit_equity_method');
  }
  const dividendRule = data.incomeType === 'dividend' ? resolveDividendRule(data.incomeSubtype) : undefined;
  if (dividendRule?.requiresOtherLabel && !data.incomeTypeOther) {
    errors.push('ระบุรายละเอียดเพิ่มเติมของเงินปันผลกรณีอัตราอื่น/อื่นๆ');
  }

  if (errors.length > 0) {
    throw new Error(errors.join('; '));
  }
}

function clearTemplateExampleCells(worksheet: { getCell: (cell: string) => { value: unknown } }): void {
  const incomeCells = Array.from({ length: 24 }, (_, index) => index + 23).flatMap((row) => [
    `M${row}`,
    `O${row}`,
    `Q${row}`,
  ]);

  for (const cell of [...Object.values(PND_X_MARK_CELLS), ...incomeCells]) {
    worksheet.getCell(cell).value = null;
  }
}

function writeIncomeLabel(worksheet: { getCell: (cell: string) => { value: unknown } }, data: NormalizedWhtData): void {
  if (data.incomeType === 'other' && data.incomeTypeOther) {
    worksheet.getCell('E46').value = data.incomeTypeOther;
    return;
  }

  if (data.incomeType === 'dividend') {
    const dividendRule = resolveDividendRule(data.incomeSubtype);
    if (dividendRule?.requiresOtherLabel && data.incomeTypeOther) {
      worksheet.getCell(dividendRule.row === 33 ? 'E33' : 'E41').value = data.incomeTypeOther;
    }
    return;
  }

  const serviceLabel = SERVICE_ROW_LABELS[data.incomeType];
  if (serviceLabel) {
    worksheet.getCell('E45').value = serviceLabel;
  }
}

function writePaymentCondition(worksheet: { getCell: (cell: string) => { value: unknown } }, data: NormalizedWhtData): void {
  const cells: Record<PaymentCondition, string> = {
    withhold: 'A56',
    'pay-forever': 'A57',
    'pay-once': 'A58',
    other: 'A59',
  };

  for (const cell of Object.values(cells)) {
    worksheet.getCell(cell).value = null;
  }

  worksheet.getCell(cells[data.paymentCondition]).value = 'X';
  if (data.paymentCondition === 'other' && data.paymentConditionOther) {
    worksheet.getCell('C59').value = data.paymentConditionOther;
  }
}

function addStampIfRequested(
  workbook: { addImage: (image: { filename: string; extension: 'png' }) => number },
  worksheet: { addImage: (imageId: number, range: { tl: { col: number; row: number }; ext: { width: number; height: number } }) => void },
  embedStamp?: boolean
): void {
  if (!embedStamp) return;

  const stampPath = resolveEaMiniAppPath('assets', 'stamp-east-asia.png');
  const stampImageId = workbook.addImage({ filename: stampPath, extension: 'png' });
  worksheet.addImage(stampImageId, {
    tl: { col: 15.5, row: 56 },
    ext: { width: 80, height: 80 },
  });
}

function derivePndPolicyKey(data: WhtData): string {
  if (data.policyKey) return data.policyKey;
  if (data.incomePolicyKey) return data.incomePolicyKey;

  if (data.incomeType === 'salary') return 'salary_yearly_summary';
  if (data.incomeType === 'dividend') return 'dividend';

  const partyType = data.payeeType === 'บุคคล' ? 'individual' : 'company';
  const income = data.incomeType === 'other' ? 'service' : data.incomeType;
  return `${income}_${partyType}`;
}

function deriveRatePolicyKey(data: WhtData): string {
  if (data.incomePolicyKey) return data.incomePolicyKey.replace(/_(individual|company)$/, '');
  if (data.policyKey) return data.policyKey.replace(/_(individual|company)$/, '');
  if (data.incomeType === 'other') return 'service';
  if (data.incomeType === 'royalty' || data.incomeType === 'commission') return 'service';
  if (data.incomeType === 'salary') return 'service';
  return data.incomeType;
}

function resolveIncomeRow(data: Pick<NormalizedWhtData, 'incomeType' | 'incomeSubtype'>): number {
  if (data.incomeType === 'dividend') {
    return resolveDividendRule(data.incomeSubtype)?.row ?? INCOME_ROWS.dividend;
  }

  return INCOME_ROWS[data.incomeType];
}

function resolveDividendRule(value?: string): (typeof DIVIDEND_RULES)[DividendSubOption] | undefined {
  if (!value) return undefined;
  return DIVIDEND_RULES[value as DividendSubOption];
}

function normalizePndType(value: string | undefined): PndType {
  const normalized = String(value ?? '').toLowerCase().replace(/^pnd/, '');
  const aliases: Record<string, PndType> = {
    '1k': '1k',
    '1ก': '1k',
    '1k-special': '1k-special',
    '1kspecial': '1k-special',
    '2': '2',
    '2k': '2k',
    '3': '3',
    '3k': '3k',
    '53': '53',
  };
  const pndType = aliases[normalized];
  if (!pndType) throw new Error(`Unsupported PND type: ${value}`);
  return pndType;
}

function normalizePaymentCondition(value: string): PaymentCondition {
  const normalized = value.replace(/_/g, '-');
  if (normalized === 'withhold' || normalized === 'pay-forever' || normalized === 'pay-once' || normalized === 'other') {
    return normalized;
  }
  throw new Error(`Unsupported payment condition: ${value}`);
}

function formatTaxId(id: string): string {
  const digits = digitsOnly(id);
  if (digits.length !== 13) return id;
  return `${digits[0]} ${digits.slice(1, 5)} ${digits.slice(5, 10)} ${digits.slice(10, 12)} ${digits[12]}`;
}

function formatThaiDate(value: Date): string {
  const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
  return `${value.getDate()} ${months[value.getMonth()]} ${value.getFullYear() + 543}`;
}

function coerceDate(value: Date | string, field: string): Date {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid ${field}`);
  }
  return date;
}

function withTypePrefix(type: PayerPayeeType, name: string): string {
  return name.startsWith(type) ? name : `${type} ${name}`;
}

function isThirteenDigitId(id?: string): boolean {
  return digitsOnly(id).length === 13;
}

function digitsOnly(value?: string): string {
  return String(value ?? '').replace(/\D/g, '');
}

function roundTo2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}
