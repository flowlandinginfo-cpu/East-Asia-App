import { fillWht50Tawi, type FilledComplianceDocument, type WhtData } from './doc-mappings/wht-50-tawi';

export type ComplianceDocType = 'wht-50-tawi' | 'pp30' | 'pnd3';

export type { FilledComplianceDocument, WhtData };

export async function fillCompliance(
  docType: ComplianceDocType,
  data: unknown
): Promise<FilledComplianceDocument> {
  switch (docType) {
    case 'wht-50-tawi':
      return fillWht50Tawi(data as WhtData);
    case 'pp30':
    case 'pnd3':
      throw new Error(`Compliance document type is not implemented yet: ${docType}`);
    default:
      return assertNever(docType);
  }
}

function assertNever(value: never): never {
  throw new Error(`Unsupported compliance document type: ${value}`);
}
