export type DividendSubOption =
  | 'credit_30'
  | 'credit_25'
  | 'credit_20'
  | 'credit_other'
  | 'no_credit_tax_exempt_profit'
  | 'no_credit_excluded_income'
  | 'no_credit_loss_carryforward'
  | 'no_credit_equity_method'
  | 'no_credit_other';

export type DividendRule = {
  code: DividendSubOption;
  officialCase: string;
  row: number;
  labelTh: string;
  lineAliases: string[];
  defaultPndType: '2' | '2k';
  defaultWhtRate: number;
  requiresOtherLabel?: boolean;
  accountantNote: string;
};

export const DIVIDEND_RULES: Record<DividendSubOption, DividendRule> = {
  credit_30: {
    code: 'credit_30',
    officialCase: '1.1',
    row: 30,
    labelTh: 'ผู้รับเงินปันผลได้รับเครดิตภาษี - จ่ายจากกำไรสุทธิที่เสียภาษีนิติบุคคล 30%',
    lineAliases: ['ปันผลเครดิตภาษี 30%', 'dividend credit 30', '40(4)(ข) 1.1'],
    defaultPndType: '2',
    defaultWhtRate: 10,
    accountantNote: 'ใช้เมื่อบริษัทผู้จ่ายมีแหล่งกำไรที่เสีย CIT 30% และผู้รับมีสิทธิเครดิตภาษี',
  },
  credit_25: {
    code: 'credit_25',
    officialCase: '1.2',
    row: 31,
    labelTh: 'ผู้รับเงินปันผลได้รับเครดิตภาษี - จ่ายจากกำไรสุทธิที่เสียภาษีนิติบุคคล 25%',
    lineAliases: ['ปันผลเครดิตภาษี 25%', 'dividend credit 25', '40(4)(ข) 1.2'],
    defaultPndType: '2',
    defaultWhtRate: 10,
    accountantNote: 'ใช้เมื่อบริษัทผู้จ่ายมีแหล่งกำไรที่เสีย CIT 25% และผู้รับมีสิทธิเครดิตภาษี',
  },
  credit_20: {
    code: 'credit_20',
    officialCase: '1.3',
    row: 32,
    labelTh: 'ผู้รับเงินปันผลได้รับเครดิตภาษี - จ่ายจากกำไรสุทธิที่เสียภาษีนิติบุคคล 20%',
    lineAliases: ['ปันผลเครดิตภาษี 20%', 'dividend credit 20', '40(4)(ข) 1.3'],
    defaultPndType: '2',
    defaultWhtRate: 10,
    accountantNote: 'ใช้เป็น default สำหรับเงินปันผลบริษัททั่วไปในยุคภาษีนิติบุคคล 20% ถ้าบัญชียืนยันว่ามีสิทธิเครดิตภาษี',
  },
  credit_other: {
    code: 'credit_other',
    officialCase: '1.4',
    row: 33,
    labelTh: 'ผู้รับเงินปันผลได้รับเครดิตภาษี - อัตราอื่น',
    lineAliases: ['ปันผลเครดิตภาษีอัตราอื่น', 'dividend credit other', '40(4)(ข) 1.4'],
    defaultPndType: '2',
    defaultWhtRate: 10,
    requiresOtherLabel: true,
    accountantNote: 'ต้องให้บัญชีระบุอัตราภาษีนิติบุคคลของกำไรสุทธิต้นทาง',
  },
  no_credit_tax_exempt_profit: {
    code: 'no_credit_tax_exempt_profit',
    officialCase: '2.1',
    row: 35,
    labelTh: 'ไม่ได้รับเครดิตภาษี - กำไรสุทธิของกิจการที่ได้รับยกเว้นภาษีเงินได้นิติบุคคล',
    lineAliases: ['ปันผลไม่เครดิต กำไรยกเว้นภาษี', 'dividend no credit exempt profit', '40(4)(ข) 2.1'],
    defaultPndType: '2',
    defaultWhtRate: 10,
    accountantNote: 'ใช้เมื่อแหล่งกำไรได้รับยกเว้น CIT ผู้รับจึงไม่ได้เครดิตภาษี',
  },
  no_credit_excluded_income: {
    code: 'no_credit_excluded_income',
    officialCase: '2.2',
    row: 36,
    labelTh: 'ไม่ได้รับเครดิตภาษี - เงินปันผล/ส่วนแบ่งกำไรที่ได้รับยกเว้นไม่ต้องนำมารวมเป็นรายได้',
    lineAliases: ['ปันผลไม่เครดิต รายได้ยกเว้น', 'dividend no credit excluded income', '40(4)(ข) 2.2'],
    defaultPndType: '2',
    defaultWhtRate: 10,
    accountantNote: 'ใช้เมื่อรายการเงินปันผลได้รับยกเว้นไม่ต้องนำมารวมคำนวณภาษีนิติบุคคล',
  },
  no_credit_loss_carryforward: {
    code: 'no_credit_loss_carryforward',
    officialCase: '2.3',
    row: 38,
    labelTh: 'ไม่ได้รับเครดิตภาษี - กำไรสุทธิหลังหักผลขาดทุนสุทธิยกมาไม่เกิน 5 ปี',
    lineAliases: ['ปันผลไม่เครดิต หักขาดทุนสะสม', 'dividend no credit loss carryforward', '40(4)(ข) 2.3'],
    defaultPndType: '2',
    defaultWhtRate: 10,
    accountantNote: 'ใช้เมื่อกำไรที่นำมาจ่ายปันผลถูก offset ด้วยผลขาดทุนสุทธิยกมาตามเงื่อนไขภาษี',
  },
  no_credit_equity_method: {
    code: 'no_credit_equity_method',
    officialCase: '2.4',
    row: 40,
    labelTh: 'ไม่ได้รับเครดิตภาษี - กำไรที่รับรู้ทางบัญชีโดยวิธีส่วนได้เสีย',
    lineAliases: ['ปันผลไม่เครดิต equity method', 'dividend no credit equity method', '40(4)(ข) 2.4'],
    defaultPndType: '2',
    defaultWhtRate: 10,
    accountantNote: 'ใช้กับกำไรจาก equity method ซึ่งเป็นกำไรทางบัญชี ไม่ใช่ฐานกำไรที่ให้เครดิตภาษีแก่ผู้รับ',
  },
  no_credit_other: {
    code: 'no_credit_other',
    officialCase: '2.5',
    row: 41,
    labelTh: 'ไม่ได้รับเครดิตภาษี - อื่น ๆ',
    lineAliases: ['ปันผลไม่เครดิต อื่นๆ', 'dividend no credit other', '40(4)(ข) 2.5'],
    defaultPndType: '2',
    defaultWhtRate: 10,
    requiresOtherLabel: true,
    accountantNote: 'ต้องให้บัญชีระบุเหตุผลว่าเป็นกรณีไม่รับเครดิตภาษีแบบใด',
  },
};

export const WHT_LINE_INTAKE_FIELDS = [
  'docType',
  'payeeName',
  'payeeTaxId',
  'payeeCitizenId',
  'payeeAddress',
  'payeeType',
  'incomeType',
  'incomeSubtype',
  'baseAmount',
  'paymentDate',
  'whtRate',
  'pndType',
  'paymentCondition',
  'signerName',
] as const;
