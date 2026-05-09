const DIGITS = ['', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
const PLACES = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน'];

export function bahtText(amount: number): string {
  if (!Number.isFinite(amount)) {
    throw new Error('Invalid amount for Thai baht text');
  }

  const rounded = Math.round((amount + Number.EPSILON) * 100);
  const baht = Math.floor(Math.abs(rounded) / 100);
  const satang = Math.abs(rounded) % 100;
  const sign = rounded < 0 ? 'ลบ' : '';
  const bahtWords = baht === 0 ? 'ศูนย์' : readThaiNumber(baht);

  if (satang === 0) {
    return `${sign}${bahtWords}บาทถ้วน`;
  }

  return `${sign}${bahtWords}บาท${readThaiNumber(satang)}สตางค์`;
}

export function bahtTextForCertificate(amount: number): string {
  return `-- ${bahtText(amount)} --`;
}

function readThaiNumber(value: number): string {
  if (value === 0) return 'ศูนย์';

  const groups: string[] = [];
  let remaining = Math.floor(value);

  while (remaining > 0) {
    groups.unshift(readSixDigitGroup(remaining % 1_000_000));
    remaining = Math.floor(remaining / 1_000_000);
  }

  return groups
    .map((group, index) => {
      if (!group) return '';
      const suffix = index < groups.length - 1 ? 'ล้าน' : '';
      return `${group}${suffix}`;
    })
    .join('');
}

function readSixDigitGroup(value: number): string {
  if (value === 0) return '';

  const digits = String(value).split('').map(Number);
  const length = digits.length;

  return digits
    .map((digit, index) => {
      if (digit === 0) return '';

      const place = length - index - 1;
      if (place === 0 && digit === 1 && length > 1) return 'เอ็ด';
      if (place === 1 && digit === 1) return 'สิบ';
      if (place === 1 && digit === 2) return 'ยี่สิบ';

      return `${DIGITS[digit]}${PLACES[place]}`;
    })
    .join('');
}
