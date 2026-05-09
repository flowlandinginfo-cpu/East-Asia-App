import { execFile } from 'child_process';
import { mkdtemp, readFile, rm, writeFile } from 'fs/promises';
import os from 'os';
import path from 'path';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

export async function renderPdfFromXlsx(xlsxBuffer: Buffer): Promise<Buffer> {
  const tmp = await mkdtemp(path.join(os.tmpdir(), 'ea-compliance-'));
  const xlsxPath = path.join(tmp, 'doc.xlsx');
  const pdfPath = path.join(tmp, 'doc.pdf');

  try {
    await writeFile(xlsxPath, xlsxBuffer);
    await convertWithLibreOffice(xlsxPath, tmp);

    return await readFile(pdfPath);
  } finally {
    await rm(tmp, { recursive: true, force: true });
  }
}

async function convertWithLibreOffice(xlsxPath: string, outDir: string): Promise<void> {
  const args = ['--headless', '--convert-to', 'pdf', '--outdir', outDir, xlsxPath];
  try {
    await execFileAsync('soffice', args, { timeout: 30_000 });
  } catch (sofficeError) {
    try {
      await execFileAsync('libreoffice', args, { timeout: 30_000 });
    } catch {
      throw sofficeError;
    }
  }
}
