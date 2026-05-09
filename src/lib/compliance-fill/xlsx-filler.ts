import type ExcelJS from 'exceljs';
import path from 'path';

export type CellValue = ExcelJS.CellValue;

export type CellWrite = {
  cell: string;
  value: CellValue;
  skipBlank?: boolean;
};

export async function loadWorkbookTemplate(templatePath: string): Promise<ExcelJS.Workbook> {
  const ExcelJSModule = await import('exceljs');
  const ExcelJSRuntime = ExcelJSModule.default ?? ExcelJSModule;
  const workbook = new ExcelJSRuntime.Workbook();
  await workbook.xlsx.readFile(templatePath);
  return workbook;
}

export function getRequiredWorksheet(workbook: ExcelJS.Workbook, preferredName?: string): ExcelJS.Worksheet {
  const worksheet = preferredName ? workbook.getWorksheet(preferredName) : workbook.worksheets[0];
  if (!worksheet) {
    throw new Error(`Worksheet not found${preferredName ? `: ${preferredName}` : ''}`);
  }
  return worksheet;
}

export function writeCells(worksheet: ExcelJS.Worksheet, writes: CellWrite[]): void {
  for (const write of writes) {
    if (write.skipBlank && (write.value === undefined || write.value === null || write.value === '')) {
      continue;
    }
    worksheet.getCell(write.cell).value = write.value;
  }
}

export async function workbookToBuffer(workbook: ExcelJS.Workbook): Promise<Buffer> {
  const output = await workbook.xlsx.writeBuffer();
  return Buffer.isBuffer(output) ? output : Buffer.from(output);
}

export function resolveEaMiniAppPath(...segments: string[]): string {
  const cwd = process.cwd();
  const inMiniApp = path.basename(cwd) === 'EA-MiniApp';
  return path.join(inMiniApp ? cwd : path.join(cwd, 'EA-MiniApp'), ...segments);
}
