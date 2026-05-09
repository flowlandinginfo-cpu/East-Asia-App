# WHT 50ทวิ — Field Mapping (Official Template)

> **Layer 2 Compliance Document** — must use the original government template AS-IS.
> Do NOT redesign. The system FILLS this template with ERP data.

**Template source:** `EA-MiniApp/templates/WHT_50_TAWI_OFFICIAL.xlsx` (Boss to save the uploaded file here)
**Form authority:** กรมสรรพากร · มาตรา 50 ทวิ แห่งประมวลรัษฎากร
**Layout:** 4 ฉบับ on a single A4 sheet (ฉบับ 1: A–R, ฉบับ 2: T–AK, ฉบับ 3: AL–BC, ฉบับ 4: BE–BV)
**Auto-replication:** Only fill ฉบับ 1 — ฉบับ 2/3/4 auto-mirror via Excel formulas (`=$Q3`, `=$P5`, etc.)

---

## Cell Mapping (ฉบับที่ 1)

### 1. Certificate Header

| Field name | Cell | Thai label | Source data | Required | Notes |
|---|---|---|---|---|---|
| `book_no` | `P2` | เล่มที่ | `ea_wht_certificates.book_no` (text) | optional | Box on top-right |
| `certificate_no` | `Q3` | เลขที่ | `ea_wht_certificates.doc_no` | required | Auto via `ea_next_doc_no('EA001','WHT')` → e.g. `EA-WHT-2026-0001` |

### 2. ผู้มีหน้าที่หักภาษี (Withholder = EA company)

| Field name | Cell | Thai label | Source data | Required | Notes |
|---|---|---|---|---|---|
| `payer_citizen_id` | `P5` | เลขประจำตัวประชาชน 13 หลัก | leave blank for นิติบุคคล | optional | only for individual payer |
| `payer_tax_id` | `P6` | เลขประจำตัวผู้เสียภาษีอากร 13 หลัก | `companies.tax_id` (EA001 = `0105567112733`) | required | format with spaces: `0 1056 67112 73 3` |
| `payer_name` | `C6` | ชื่อ | `companies.company_name_th` (`บริษัท อีสเอเชีย บิสซิเนส จำกัด`) | required | prepend type word |
| `payer_type_label` | C6 prefix | (บุคคล/นิติบุคคล/บริษัท/สมาคม/คณะบุคคล) | derived (EA = บริษัท) | required | hint text C7 explains types |
| `payer_address` | `C8` | ที่อยู่ | `companies.address` (`149/162 หมู่ 3 ต.บางเพรียง อ.บางบ่อ จ.สมุทรปราการ 10560`) | required | hint at C9 |

### 3. ผู้ถูกหักภาษี (Payee = supplier/contractor receiving payment)

| Field name | Cell | Thai label | Source data | Required | Notes |
|---|---|---|---|---|---|
| `payee_citizen_id` | `P11` | เลขประจำตัวประชาชน 13 หลัก | individual payee's national ID | conditional | required if individual |
| `payee_tax_id` | `P12` | เลขประจำตัวผู้เสียภาษีอากร 13 หลัก | `ea_suppliers.tax_id` OR free text from form | conditional | required if นิติบุคคล |
| `payee_name` | `C12` | ชื่อ | `ea_suppliers.supplier_name` OR `ea_wht_certificates.payee_name` | required | prepend type word |
| `payee_type_label` | C12 prefix | (บุคคล/นิติบุคคล/บริษัท/สมาคม/คณะบุคคล) | `ea_wht_certificates.payee_type` | required | |
| `payee_address` | `C14` | ที่อยู่ | `ea_suppliers.address` OR `ea_wht_certificates.payee_address` | required | |

### 4. ลำดับ + ภ.ง.ด. (PND form selector)

| Field name | Cell | Thai label | Source data | Required | Notes |
|---|---|---|---|---|---|
| `sequence_no` | `B16` | ลำดับที่ | `ea_wht_certificates.sequence_no` (int → text) | required | line in submitted ภ.ง.ด. form |
| `pnd_1k` | `H16` (X mark) | (1) ภ.ง.ด.1ก | check if `pnd_type='1k'` | one of seven required | salary withholding (annual) |
| `pnd_1k_special` | `J16` | (2) ภ.ง.ด.1ก พิเศษ | check if `pnd_type='1k-special'` | | |
| `pnd_2` | `M16` | (3) ภ.ง.ด.2 | check if `pnd_type='2'` | | dividends, interests |
| `pnd_2k` | `O16` | (4) ภ.ง.ด.2ก | check if `pnd_type='2k'` | | |
| `pnd_3` | `H18` | (5) ภ.ง.ด.3 | check if `pnd_type='3'` | | services to individuals (most common for Boss's case) |
| `pnd_3k` | `J18` | (6) ภ.ง.ด.3ก | check if `pnd_type='3k'` | | |
| `pnd_53` | `M18` | (7) ภ.ง.ด.53 | check if `pnd_type='53'` | | services to corporates |

**Mark with `X` in the appropriate cell** (existing template pre-fills `M18: X` as example).

### 5. Income Type Table (rows 23–47, columns B/M/O/Q)

The official form has 6 income categories with sub-rows. Pick one row per certificate (most certificates fill exactly one row).

| Row | Field name | Cell | Thai label | Source data | Required | Notes |
|---|---|---|---|---|---|---|
| 23 | `salary_*` | B23/M23/O23/Q23 | 1. เงินเดือน ค่าจ้าง โบนัส ฯลฯ มาตรา 40(1) | use if `income_type='salary'` | conditional | M23=date, O23=amount, Q23=tax |
| 24 | `commission_*` | B24/M24/O24/Q24 | 2. ค่าธรรมเนียม ค่านายหน้า มาตรา 40(2) | use if `income_type='commission'` | conditional | |
| 25 | `royalty_*` | B25/M25/O25/Q25 | 3. ค่าแห่งลิขสิทธิ์ มาตรา 40(3) | use if `income_type='royalty'` | conditional | |
| 26 | `interest_*` | B26/M26/O26/Q26 | 4(ก) ค่าดอกเบี้ย มาตรา 40(4)(ก) | use if `income_type='interest'` | conditional | |
| 27–41 | `dividend_*` | M/O/Q on selected sub-row | 4(ข) เงินปันผล + sub-options 1.1–2.5 | use if `income_type='dividend'` | conditional | `income_subtype` selects exact row below |
| **45** | `service_amount` | **O45** | **5. มาตรา 3 เตรส (services, transport, rent, etc.)** | `ea_wht_certificates.base_amount` | **required for most cases** | **Most common row for Boss's deals** |
| 45 | `service_wht` | **Q45** | (auto-calc) | `=ROUND(O45*3%,2)` already in template | required | 3% rate hardcoded for service |
| 45 | `service_date` | **M45** | วัน เดือน หรือปีภาษีที่จ่าย | `ea_wht_certificates.doc_date` | required | DD/MM/YY (พ.ศ.) |
| 46 | `other_label` | E46 | "ระบุ" custom label for "อื่น ๆ" | `ea_wht_certificates.income_type_other` | optional | only if income is not in 1–5 |
| 46 | `other_amount` | O46 | จำนวนเงินที่จ่าย | | optional | |
| 46 | `other_wht` | Q46 | `=ROUND(O46*1%,2)` | auto-calc 1% rate | optional | |

**Note for Boss's transport-commission case (deal น้ำมันกฤษณา):**
- Use **row 45** (มาตรา 3 เตรส — ค่าบริการ/ค่าขนส่ง)
- `O45` = base_amount (e.g. ฿148,150)
- `Q45` auto-calculates = `=ROUND(O45*3%,2)` = ฿4,444.50
- `pnd_type` = `'3'` (individual recipient) → mark X at `H18`

#### Dividend 40(4)(ข) sub-options for LINE OA + UX

For dividends, do not ask the user for an Excel row. The LINE parser should output:

```json
{
  "incomeType": "dividend",
  "incomeSubtype": "credit_20",
  "baseAmount": 100000,
  "paymentDate": "2026-05-09",
  "whtRate": 10
}
```

The fill engine then writes `paymentDate/baseAmount/whtAmount` into `M/O/Q` of the selected official sub-row.

| `income_subtype` | Official case | Row | Business/accounting meaning | Default WHT | UX question / LINE hint |
|---|---:|---:|---|---:|---|
| `credit_30` | 1.1 | 30 | Dividend recipient gets tax credit; paid from net profit taxed at 30% CIT | 10% | “ปันผลนี้มาจากกำไรที่เสียภาษี 30% และผู้รับเครดิตภาษีได้ไหม?” |
| `credit_25` | 1.2 | 31 | Dividend recipient gets tax credit; paid from net profit taxed at 25% CIT | 10% | “แหล่งกำไรเสียภาษี 25% ใช่ไหม?” |
| `credit_20` | 1.3 | 32 | Dividend recipient gets tax credit; paid from net profit taxed at 20% CIT | 10% | Default for general company dividends only after accountant confirms tax credit |
| `credit_other` | 1.4 | 33 | Dividend recipient gets tax credit; other CIT rate | 10% | Ask accountant for rate/label; fill `incomeTypeOther` into E33 |
| `no_credit_tax_exempt_profit` | 2.1 | 35 | No tax credit; profit source is CIT-exempt business profit | 10% | “กำไรต้นทางได้รับยกเว้นภาษีนิติบุคคลไหม?” |
| `no_credit_excluded_income` | 2.2 | 36 | No tax credit; dividend/profit share is exempt from being included as CIT income | 10% | “รายการนี้เป็นเงินปันผลที่ไม่ต้องนำมารวมคำนวณภาษีนิติบุคคลไหม?” |
| `no_credit_loss_carryforward` | 2.3 | 38 | No tax credit; profit after net loss carryforward up to 5 years | 10% | “กำไรนี้ถูกหักผลขาดทุนสะสมก่อนจ่ายปันผลไหม?” |
| `no_credit_equity_method` | 2.4 | 40 | No tax credit; accounting profit recognized by equity method | 10% | “เป็นกำไรทางบัญชีจาก equity method ไหม?” |
| `no_credit_other` | 2.5 | 41 | No tax credit; other reason | 10% | Ask accountant for reason; fill `incomeTypeOther` into E41 |

Operational rule: if LINE text only says “ออก 50 ทวิ เงินปันผล” without subtype, return a clarification quick reply instead of guessing. Suggested quick replies: “เครดิตภาษี 20%”, “ไม่ได้เครดิต - ยกเว้นภาษี”, “ไม่ได้เครดิต - equity method”, “ให้บัญชีเลือก”.

### 6. Totals (rows 48 + 50)

| Field name | Cell | Thai label | Source data | Required | Notes |
|---|---|---|---|---|---|
| `total_amount` | `O48` | รวมเงินที่จ่าย | `=SUM(O23:P47)` already in template | auto | |
| `total_wht` | `Q48` | รวมภาษีที่หักนำส่ง | `=SUM(Q23:R47)` already in template | auto | |
| `wht_amount_text` | `I50` | รวมภาษีที่นำส่ง (ตัวอักษร) | `=CONCATENATE("-- ",BAHTTEXT(Q48)," --")` already in template | auto | Thai BAHTTEXT formula |

### 7. Section 6 — Funds (optional, usually blank for service WHT)

| Field name | Cell | Thai label | Source data | Required |
|---|---|---|---|---|
| `pf_license_no` | (blank in row 52) | เงินสะสมจ่ายเข้ากองทุนสำรองเลี้ยงชีพ ใบอนุญาตเลขที่ | `ea_wht_certificates.pf_license_no` | optional |
| `pf_amount` | row 52 col O area | จำนวนเงิน | `ea_wht_certificates.pf_amount` | optional |
| `social_sec_amount` | row 53 area | เงินสมทบจ่ายเข้ากองทุนประกันสังคม | `ea_wht_certificates.social_sec_amount` | optional |
| `employer_account_no` | row 54 area | เลขที่บัญชีนายจ้าง | optional | optional |

### 8. Payment Condition (row 55–59 left side)

| Field name | Cell area | Thai label | Source data | Required | Notes |
|---|---|---|---|---|---|
| `payment_condition` | row 56–59 (B/U/AM/BF) | ผู้จ่ายเงิน — radio button | `ea_wht_certificates.payment_condition` | required | one of: |
|  | row 56 | (1) หักภาษี ณ ที่จ่าย | check if `'withhold'` | | most common |
|  | row 57 | (2) ออกภาษีให้ตลอดไป | check if `'pay-forever'` | | EA absorbs WHT permanently |
|  | row 58 | (3) ออกภาษีให้ครั้งเดียว | check if `'pay-once'` | | EA absorbs WHT for this payment only |
|  | row 59 | (4) อื่นๆ ระบุ | check if `'other'` + fill text | | |
| `payment_condition_other` | (next to row 59) | ระบุ | `ea_wht_certificates.payment_condition_other` | conditional | required if `'other'` |

### 9. Signature Block (row 58–59 right side)

| Field name | Cell | Thai label | Source data | Required | Notes |
|---|---|---|---|---|---|
| `signer_name` | `F58` (between F58 and L58) | ลงชื่อ ___ ผู้มีหน้าที่หักภาษี ณ ที่จ่าย | `ea_wht_certificates.signer_name` (e.g. CEO อาบู or Boss วี) | required | embed signature image if available |
| `issued_date` | `G59` | วัน เดือน ปีที่ออกหนังสือรับรองฯ | `ea_wht_certificates.issued_date` | required | format e.g. `8 พ.ค. 2569` |
| `company_stamp` | (overlay near signature) | ประทับตรานิติบุคคล | `companies.stamp_url` (`/assets/stamp-east-asia.png`) | optional | Boss's blue arch stamp |

---

## Validation rules (before fill)

| Rule | Field | Error message |
|---|---|---|
| Required | `payer_name` | "ระบุชื่อบริษัทผู้หักภาษี" |
| Required + 13 digits | `payer_tax_id` | "ใส่เลขประจำตัวผู้เสียภาษี 13 หลัก" |
| Required | `payee_name` | "ระบุชื่อผู้ถูกหักภาษี" |
| Required + 13 digits | `payee_tax_id` OR `payee_citizen_id` | "ใส่เลขประจำตัวผู้เสียภาษี/ประชาชน 13 หลัก" |
| Required + > 0 | `base_amount` | "ใส่จำนวนเงินที่จ่าย" |
| Required + 0 < rate ≤ 100 | `wht_rate` | "ใส่อัตรา WHT (เช่น 3 = 3%)" |
| Auto | `wht_amount` | `wht_amount = ROUND(base_amount × wht_rate / 100, 2)` |
| Required | `payment_date` | "วันที่จ่ายเงิน" |
| Required (one of 7) | `pnd_type` | "เลือก ภ.ง.ด. ที่ใช้ส่ง" |
| Required | `issued_date` | "วันที่ออกหนังสือรับรอง" |
| Required (one of 4) | `payment_condition` | "เลือกเงื่อนไขการจ่าย" |

---

## Owner / accountant confirmation NEEDED (ถามคุณเหลิม)

These fields cannot be defaulted — Boss + คุณเหลิม must confirm:

1. **Default `pnd_type` per income_type** — common mappings:
   - Service to individual (เก่งกว่า/อาบู/contractors): `pnd_type='3'`
   - Service to corporate: `pnd_type='53'`
   - Salary: `pnd_type='1k'`
   - Dividend: `pnd_type='2'` or `'2k'`
2. **Default `wht_rate` per income_type** — common Thai rates:
   - ค่าบริการทั่วไป (services): 3%
   - ค่าโฆษณา: 2%
   - ค่าเช่า: 5%
   - ค่าวิชาชีพ (professional fees): 3%
3. **`payment_condition` default** — usually `'withhold'` (1) but Boss might choose `'pay-once'` (3) if EA absorbs the WHT
4. **`book_no`** — does EA use book numbers? If yes, where do we get the next book_no from?
5. **Stamp policy** — print stamp on every WHT cert? Or only on copy 3+4 (EA's records)?
6. **Where to file the 4 ฉบับ:**
   - ฉบับ 1+2 → ส่งให้ผู้ถูกหักภาษี (payee)
   - ฉบับ 3 → แนบ ภ.ง.ด. ส่งสรรพากร (EA's filing)
   - ฉบับ 4 → EA เก็บเป็นหลักฐาน

---

## Implementation reference

See `EA-MiniApp/docs/COMPLIANCE_DOCS_ARCHITECTURE.md` for fill-into-template engine specification.
