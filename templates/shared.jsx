import React from "react";

export const ASSETS = {
  logo: "/assets/logo-east-asia.png",
  stamp: "/assets/stamp-east-asia.png",
};

export const DEFAULT_COMPANY = {
  nameTh: "บริษัท อีสเอเชีย บิสซิเนส จำกัด",
  nameEn: "EAST ASIA BUSINESS COMPANY LIMITED",
  address: "149/162 หมู่ 3 ต.บางเพรียง อ.บางบ่อ จ.สมุทรปราการ 10560",
  taxId: "0105567112733",
  phone: "0612511440",
  email: "ajmal.oud20@gmail.com",
};

export const DEFAULT_PARTY = {
  name: "Al-Mukhlif",
  nameAlt: "المخلف",
  code: "CUST-006",
  address: "Saudi Arabia",
  terms: "Credit 30 days",
};

export const DEFAULT_LINES = [
  {
    description: "น้ำมันกฤษณา (น้ำมันใต้)",
    descriptionEn: "Agarwood Oil - Southern Grade",
    qty: 4000,
    unit: "โตล่า",
    unitPrice: 1650,
    amount: 6600000,
  },
];

const money = (value, currency = "THB") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(Number(value || 0));

const number = (value) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(Number(value || 0));

const cn = (...classes) => classes.filter(Boolean).join(" ");

export const DOC_CONFIG = {
  QT: {
    titleTh: "ใบเสนอราคา",
    titleEn: "QUOTATION",
    noLabel: "เลขที่",
    dateLabel: "วันที่",
    statusClass: "issued",
    statusText: "ส่งแล้ว",
    primaryCardTitle: "เสนอให้กับ · Customer",
    secondaryCardTitle: "โครงการ · Project",
    secondaryFallbackTitle: "Agarwood Oil Export 2026 (TM-Mar)",
    secondaryFallbackDetail:
      "Reference: VERBAL-DEAL-2026-05\nเงื่อนไขชำระ: 50% มัดจำ · 50% ก่อนส่ง",
    noteTitle: "หมายเหตุ",
    noteFallback:
      "ราคาเสนอนี้รวมภาษีมูลค่าเพิ่ม · ไม่รวมค่าขนส่งระหว่างประเทศ\nใบเสนอราคามีผลบังคับ 30 วันนับจากวันที่ออก",
    totalLabel: "ยอดรวม · GRAND TOTAL",
    leftSignature: "ผู้เสนอราคา · Issued by",
    rightSignature: "ผู้รับ · Accepted by",
  },
  INV: {
    titleTh: "ใบแจ้งหนี้ / ใบกำกับภาษี",
    titleEn: "INVOICE / TAX INVOICE",
    noLabel: "เลขที่",
    dateLabel: "วันที่",
    statusClass: "issued",
    statusText: "รอชำระ",
    primaryCardTitle: "ลูกค้า · Customer",
    secondaryCardTitle: "อ้างอิง · Reference",
    secondaryFallbackTitle: "QT EA-QT-2026-0001",
    secondaryFallbackDetail: "เงื่อนไขชำระ: net 30 days · T/T Bank Transfer",
    noteTitle: "รายละเอียดชำระเงิน",
    noteFallback:
      "ธ. กสิกรไทย · เลขบัญชี xxx-x-xxxxx-x · ชื่อบัญชี บริษัท อีสเอเชีย บิสซิเนส จำกัด",
    totalLabel: "ยอดที่ต้องชำระ",
    leftSignature: "ผู้ออกใบกำกับภาษี",
    rightSignature: "ผู้รับใบกำกับภาษี",
  },
  RC: {
    titleTh: "ใบเสร็จรับเงิน",
    titleEn: "OFFICIAL RECEIPT",
    noLabel: "เลขที่",
    dateLabel: "วันที่",
    statusClass: "paid",
    statusText: "ชำระแล้ว",
    primaryCardTitle: "ได้รับเงินจาก",
    secondaryCardTitle: "ชำระสำหรับ",
    secondaryFallbackTitle: "EA-INV-2026-0001",
    secondaryFallbackDetail: "วิธีชำระ: T/T Wire Transfer",
    noteTitle: "ข้อความ",
    noteFallback: "ขอบคุณสำหรับการชำระเงิน · Thank you for your payment",
    totalLabel: "ยอดรับสุทธิ · NET RECEIVED",
    leftSignature: "ผู้รับเงิน",
    rightSignature: "ผู้ชำระเงิน",
    receiptMode: true,
  },
  PR: {
    titleTh: "ใบขอซื้อ",
    titleEn: "PURCHASE REQUEST",
    noLabel: "เลขที่",
    dateLabel: "วันที่",
    statusClass: "issued",
    statusText: "อนุมัติแล้ว",
    primaryCardTitle: "ผู้ขอซื้อ",
    secondaryCardTitle: "ผู้ขายที่แนะนำ",
    secondaryFallbackTitle: "บ่าว (เบา)",
    secondaryFallbackDetail: "SUP-018 · Thailand · ผู้จำหน่ายไม้กฤษณา/น้ำมันหอมระเหย",
    noteTitle: "เหตุผลการขอซื้อ",
    noteFallback:
      "เพื่อขายต่อให้ลูกค้า Al-Mukhlif (ตามใบเสนอราคา EA-QT-2026-0001)",
    totalLabel: "ยอดรวมประมาณการ",
    leftSignature: "ผู้ขอ · Requester",
    rightSignature: "CEO Sign-off",
    estimateMode: true,
  },
  PO: {
    titleTh: "ใบสั่งซื้อ",
    titleEn: "PURCHASE ORDER",
    noLabel: "เลขที่",
    dateLabel: "วันที่",
    statusClass: "issued",
    statusText: "ส่งให้ผู้ขายแล้ว",
    primaryCardTitle: "ผู้สั่งซื้อ · Buyer",
    secondaryCardTitle: "ผู้ขาย · Supplier",
    secondaryFallbackTitle: "บ่าว (เบา)",
    secondaryFallbackDetail: "SUP-018 · Thailand · Bank info: รอข้อมูล",
    noteTitle: "เงื่อนไขการชำระและจัดส่ง",
    noteFallback: "การชำระ: 50% มัดจำหลังออก PO · 50% หลังรับของครบ",
    totalLabel: "ยอดที่ต้องจ่าย",
    leftSignature: "ผู้สั่งซื้อ · Buyer",
    rightSignature: "ผู้ขายรับทราบ · Acknowledged by",
  },
  GR: {
    titleTh: "ใบรับของ",
    titleEn: "GOODS RECEIPT",
    noLabel: "เลขที่",
    dateLabel: "วันที่รับของ",
    statusClass: "paid",
    statusText: "รับของแล้ว",
    primaryCardTitle: "รับของจาก",
    secondaryCardTitle: "อ้างอิง",
    secondaryFallbackTitle: "PO EA-PO-2026-0001",
    secondaryFallbackDetail: "DO ของผู้ขาย: BAO-DO-202605-12",
    noteTitle: "บันทึกการรับของ",
    noteFallback: "ตรวจสอบสภาพและปริมาณครบถ้วนตามใบสั่งซื้อ",
    leftSignature: "ผู้รับของ · Received by",
    rightSignature: "ผู้ส่งของ · Delivered by",
    goodsReceiptMode: true,
  },
};

const sharedStyle = `
  .ea-doc-shell{background:#efeae0;min-height:100vh;padding:24px 0;font-family:Inter,"IBM Plex Sans Thai",system-ui,sans-serif;color:#0e1a14;-webkit-font-smoothing:antialiased}
  .ea-a4{width:190mm;min-height:277mm;background:#fff;box-shadow:0 18px 50px rgba(15,61,46,.12),0 4px 12px rgba(15,61,46,.06);margin:0 auto;overflow:hidden;position:relative;font-size:9.5pt;line-height:1.35}
  .ea-accent{position:absolute;left:0;right:0;top:0;height:5px;background:linear-gradient(90deg,#0f3d2e 0%,#c9a96e 50%,#0f3d2e 100%)}
  .ea-head{background:linear-gradient(90deg,#fff 0%,#fff 60%,#fbf7ea 100%);padding:10mm 12mm 6mm}
  .ea-pad{padding:0 12mm 8mm}
  .ea-crest{height:18mm;width:auto;object-fit:contain}
  .ea-card{background:#fff;border:1px solid #e8e3d6;border-radius:8px;box-shadow:0 6px 14px rgba(15,61,46,.04),0 1px 3px rgba(15,61,46,.04)}
  .ea-card-head{display:flex;align-items:center;gap:6px;border-bottom:1px solid #f0ead8;padding:6px 10px;background:linear-gradient(90deg,#fff,#fcf9ee)}
  .ea-card-icon{width:22px;height:22px;border-radius:6px;background:#f8efd3;color:#a88636;display:grid;place-items:center;font-size:11pt}
  .ea-card-title{font-size:9pt;font-weight:700;color:#14533f}
  .ea-card-body{padding:8px 10px}
  .ea-lines{width:100%;border-collapse:collapse;margin:10px 0}
  .ea-lines th{background:#14533f;color:#e5c970;font-size:7.5pt;font-weight:700;padding:6px 8px;text-align:left;letter-spacing:.04em;text-transform:uppercase}
  .ea-lines th.right,.ea-lines td.right{text-align:right}
  .ea-lines th.center,.ea-lines td.center{text-align:center}
  .ea-lines td{font-size:9pt;padding:6px 8px;border-bottom:1px solid #f0ead8;vertical-align:top}
  .ea-lines tr:nth-child(even){background:#fcf9ee}
  .ea-desc-th{font-weight:600;color:#0e1a14}
  .ea-desc-en{font-size:7.5pt;color:#6a7068;margin-top:1px}
  .ea-num{font-variant-numeric:tabular-nums;font-feature-settings:"tnum"}
  .ea-totals{width:80mm;border:1px solid #e8e3d6;border-radius:6px;overflow:hidden;font-size:9pt}
  .ea-total-row{display:flex;justify-content:space-between;gap:12px;padding:4px 10px}
  .ea-total-row.bg{background:#fcf9ee}
  .ea-total-row.deduct .ea-total-value{color:#c5392f}
  .ea-total-label{color:#6a7068}
  .ea-total-value{font-weight:600;font-variant-numeric:tabular-nums}
  .ea-total-grand{background:#14533f;color:#e5c970;padding:7px 10px;font-weight:700;font-size:10pt}
  .ea-sig-grid{display:grid;grid-template-columns:1fr auto 1fr;gap:8mm;align-items:flex-end;margin-top:18px}
  .ea-sig-box{text-align:center;min-height:30mm}
  .ea-sig-line{border-bottom:1.5px solid #344037;height:18mm;position:relative;margin-bottom:4px}
  .ea-sig-line.signed:before{content:"";position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:50mm;height:14mm;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'><path d='M10,40 Q40,5 70,30 T130,25 Q160,15 190,35' stroke='%231F6FB5' stroke-width='1.5' fill='none' stroke-linecap='round'/><path d='M30,45 Q60,38 90,42 T150,40' stroke='%231F6FB5' stroke-width='1.2' fill='none' opacity='0.6'/></svg>");background-size:contain;background-repeat:no-repeat;background-position:center}
  .ea-sig-label{font-size:7.5pt;color:#6a7068}
  .ea-sig-name{font-size:8pt;font-weight:600;color:#0e1a14;margin-top:1px}
  .ea-stamp{width:32mm;height:32mm;object-fit:contain;opacity:.78;mix-blend-mode:multiply}
  .ea-stamp-placeholder{width:32mm;height:32mm;border:1.5px dashed #c9a96e;border-radius:50%;display:grid;place-items:center;font-size:8pt;color:#a88636;text-align:center;font-weight:600}
  .ea-badge{display:inline-block;padding:2px 8px;border-radius:999px;font-size:7.5pt;font-weight:700;letter-spacing:.05em;text-transform:uppercase;vertical-align:middle}
  .ea-badge.issued{background:#d9efe4;color:#0f3d2e;border:1px solid #6bc09e}
  .ea-badge.paid{background:#f8efd3;color:#a88636;border:1px solid #e5c970}
  .ea-badge.draft{background:#fef3c7;color:#92400e;border:1px solid #fcd34d}
  .ea-flex{display:flex}.ea-between{justify-content:space-between}.ea-start{align-items:flex-start}.ea-end{align-items:flex-end}.ea-center{align-items:center}.ea-gap{gap:12px}.ea-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:12px}.ea-text-right{text-align:right}.ea-bold{font-weight:700}.ea-gold{color:#a88636}.ea-green{color:#0f3d2e}.ea-muted{color:#6a7068}.ea-thai{font-family:"IBM Plex Sans Thai",Inter,sans-serif}.ea-ar{font-family:"Noto Naskh Arabic",serif;direction:rtl}
  .ea-qr{width:26mm;height:26mm;object-fit:contain;border:1px solid #e8e3d6;border-radius:6px;padding:3px;background:#fff}
  @page{size:A4;margin:10mm}
  @media print{body{background:#fff!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}.ea-doc-shell{background:#fff;padding:0}.ea-a4{box-shadow:none;margin:0;width:190mm;min-height:277mm}}
`;

export function buildDocProps(type, props) {
  const config = DOC_CONFIG[type];
  const company = { ...DEFAULT_COMPANY, ...(props.company || {}) };
  const party = { ...DEFAULT_PARTY, ...(props.party || {}) };
  const doc = {
    documentNo: `EA-${type}-2026-0001`,
    date: "8 พ.ค. 2569",
    statusText: config.statusText,
    statusClass: config.statusClass,
    currency: "THB",
    ...(props.doc || {}),
  };
  const lines = props.lines?.length ? props.lines : DEFAULT_LINES;
  const signatures = {
    left: { name: company.nameEn, signed: true },
    right: { name: party.name, signed: false },
    ...(props.signatures || {}),
  };

  return {
    config,
    company,
    doc,
    party,
    lines: normalizeLines(lines, doc.currency),
    totals: props.totals || buildTotals(lines, doc.currency, config),
    signatures,
    qrCode: props.qrCode,
  };
}

function normalizeLines(lines, currency) {
  return lines.map((line) => ({
    ...line,
    qty: line.qty ?? line.quantity ?? 0,
    unitPrice: line.unitPrice ?? line.price ?? 0,
    amount:
      line.amount ??
      Number(line.qty ?? line.quantity ?? 0) * Number(line.unitPrice ?? line.price ?? 0),
    currency,
  }));
}

function buildTotals(lines, currency, config) {
  const subtotal = lines.reduce((sum, line) => {
    const qty = Number(line.qty ?? line.quantity ?? 0);
    const price = Number(line.unitPrice ?? line.price ?? 0);
    return sum + Number(line.amount ?? qty * price);
  }, 0);
  const vat = config.receiptMode || config.goodsReceiptMode ? 0 : subtotal * 0.07;
  const grand = subtotal + vat;
  const rows = config.receiptMode
    ? [{ label: "ยอดเงินรวม", value: subtotal, tone: "bg" }]
    : [
        {
          label: config.estimateMode ? "ยอดประมาณการ" : "ยอดก่อนภาษี",
          value: subtotal,
        },
        { label: config.estimateMode ? "VAT 7% (est)" : "VAT 7%", value: vat, tone: "bg" },
      ];

  return { rows, grandTotal: grand, grandLabel: config.totalLabel, currency };
}

export function PremiumDocument(props) {
  const { config, company, doc, party, lines, totals, signatures, qrCode } = props;

  return (
    <div className="ea-doc-shell">
      <style>{sharedStyle}</style>
      <article className="ea-a4">
        <div className="ea-accent" />
        <Header config={config} company={company} doc={doc} />
        <main className="ea-pad">
          <div className="ea-grid-2">
            <InfoCard title={config.primaryCardTitle} icon={config.goodsReceiptMode || config.secondaryCardTitle.includes("ผู้ขาย") ? "🏪" : "📍"}>
              <PartyBlock party={party} />
            </InfoCard>
            <InfoCard title={config.secondaryCardTitle} icon="📁">
              <div className="ea-bold">{doc.referenceTitle || config.secondaryFallbackTitle}</div>
              <TextLines value={doc.referenceDetail || config.secondaryFallbackDetail} />
            </InfoCard>
          </div>

          {config.goodsReceiptMode ? <GoodsReceiptLines lines={lines} /> : <MoneyLines lines={lines} currency={doc.currency} receiptMode={config.receiptMode} estimateMode={config.estimateMode} />}

          {!config.goodsReceiptMode && (
            <div className="ea-flex ea-between ea-end ea-gap">
              <NoteBlock title={doc.noteTitle || config.noteTitle} text={doc.note || config.noteFallback} qrCode={qrCode} />
              <Totals totals={totals} currency={doc.currency} />
            </div>
          )}

          {config.estimateMode && <ApprovalLadder approvals={doc.approvals} />}
          {config.goodsReceiptMode && <GoodsReceiptNote text={doc.note || config.noteFallback} qrCode={qrCode} />}

          <Signatures config={config} signatures={signatures} stampUrl={company.stampUrl || ASSETS.stamp} />
        </main>
      </article>
    </div>
  );
}

function Header({ config, company, doc }) {
  return (
    <header className="ea-head">
      <div className="ea-flex ea-between ea-start ea-gap">
        <div className="ea-flex ea-center ea-gap">
          <img src={company.logoUrl || ASSETS.logo} className="ea-crest" alt="EA logo" />
          <div>
            <div className="ea-thai ea-bold ea-green" style={{ fontSize: "11pt" }}>
              {company.nameTh}
            </div>
            <div className="ea-bold ea-gold" style={{ fontSize: "9pt", letterSpacing: "0.05em" }}>
              {company.nameEn}
            </div>
            <div className="ea-thai ea-muted" style={{ fontSize: "8pt", marginTop: 2 }}>
              {company.address} · Tax ID {company.taxId}
              {(company.phone || company.email) && (
                <>
                  <br />
                  {company.phone ? `โทร ${company.phone}` : ""}
                  {company.phone && company.email ? " · " : ""}
                  {company.email}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="ea-text-right">
          <h1 className="ea-thai" style={{ color: "#0a2a20", fontSize: config.titleTh.length > 16 ? "18pt" : "20pt", fontWeight: 900, margin: 0 }}>
            {config.titleTh}
          </h1>
          <div className="ea-bold ea-gold" style={{ fontSize: "9pt", letterSpacing: "0.12em" }}>
            {config.titleEn}
          </div>
          <div style={{ marginTop: 8, fontSize: "10pt" }}>
            <span className="ea-thai ea-muted">{config.noLabel}</span>{" "}
            <strong className="ea-gold" style={{ fontSize: "11pt" }}>
              {doc.documentNo || doc.no}
            </strong>
          </div>
          <div className="ea-thai ea-muted" style={{ fontSize: "8.5pt" }}>
            {config.dateLabel} {doc.date}
            {doc.dueDate ? ` · ${doc.dueDate}` : ""}
          </div>
          <div style={{ marginTop: 4 }}>
            <span className={cn("ea-badge ea-thai", doc.statusClass || config.statusClass)}>
              {doc.statusText || config.statusText}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function InfoCard({ title, icon, children }) {
  return (
    <section className="ea-card" style={{ marginBottom: 10 }}>
      <div className="ea-card-head">
        <div className="ea-card-icon">{icon}</div>
        <div className="ea-card-title ea-thai">{title}</div>
      </div>
      <div className="ea-card-body" style={{ fontSize: "9pt" }}>
        {children}
      </div>
    </section>
  );
}

function PartyBlock({ party }) {
  return (
    <>
      <div className="ea-bold ea-thai">{party.name}</div>
      {party.nameAlt && (
        <div className="ea-ar ea-green" style={{ fontSize: "10pt" }}>
          {party.nameAlt}
        </div>
      )}
      <div className="ea-thai ea-muted" style={{ fontSize: "8.5pt", marginTop: 2 }}>
        {[party.code, party.address, party.terms].filter(Boolean).join(" · ")}
      </div>
      {party.taxId && (
        <div className="ea-thai ea-muted" style={{ fontSize: "8.5pt" }}>
          เลขผู้เสียภาษี: {party.taxId}
        </div>
      )}
    </>
  );
}

function TextLines({ value }) {
  return (
    <div className="ea-thai ea-muted" style={{ fontSize: "8.5pt", marginTop: 2 }}>
      {String(value || "")
        .split("\n")
        .map((line, index) => (
          <React.Fragment key={`${line}-${index}`}>
            {line}
            {index < String(value || "").split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
    </div>
  );
}

function MoneyLines({ lines, currency, receiptMode, estimateMode }) {
  return (
    <table className="ea-lines">
      <thead>
        <tr>
          <th style={{ width: 24 }}>#</th>
          <th>รายการ · Description</th>
          {!receiptMode && <th className="right" style={{ width: 60 }}>จำนวน</th>}
          {!receiptMode && <th className="center" style={{ width: 50 }}>หน่วย</th>}
          {!receiptMode && <th className="right" style={{ width: 80 }}>ราคา/หน่วย</th>}
          <th className="right" style={{ width: receiptMode ? 120 : 100 }}>{estimateMode ? "ประมาณการ" : receiptMode ? `จำนวนเงิน (${currency})` : `รวม (${currency})`}</th>
        </tr>
      </thead>
      <tbody>
        {lines.map((line, index) => (
          <tr key={`${line.description}-${index}`}>
            <td>{index + 1}</td>
            <td>
              <div className="ea-desc-th ea-thai">{line.description || line.name}</div>
              {line.descriptionEn && <div className="ea-desc-en">{line.descriptionEn}</div>}
            </td>
            {!receiptMode && <td className="right ea-num">{number(line.qty)}</td>}
            {!receiptMode && <td className="center ea-thai">{line.unit}</td>}
            {!receiptMode && <td className="right ea-num">{number(line.unitPrice)}</td>}
            <td className="right ea-num">{number(line.amount)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function GoodsReceiptLines({ lines }) {
  return (
    <table className="ea-lines">
      <thead>
        <tr>
          <th style={{ width: 24 }}>#</th>
          <th>รายการ</th>
          <th className="right" style={{ width: 60 }}>สั่ง</th>
          <th className="right" style={{ width: 60 }}>รับ</th>
          <th className="center" style={{ width: 50 }}>หน่วย</th>
          <th className="center" style={{ width: 80 }}>สภาพ</th>
        </tr>
      </thead>
      <tbody>
        {lines.map((line, index) => (
          <tr key={`${line.description}-${index}`}>
            <td>{index + 1}</td>
            <td><div className="ea-desc-th ea-thai">{line.description || line.name}</div></td>
            <td className="right ea-num">{number(line.orderedQty ?? line.qty)}</td>
            <td className="right ea-num" style={{ color: "#1f8a5c", fontWeight: 700 }}>{number(line.receivedQty ?? line.qty)}</td>
            <td className="center ea-thai">{line.unit}</td>
            <td className="center ea-thai" style={{ color: "#1f8a5c", fontWeight: 600 }}>{line.condition || "ครบถ้วน"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function NoteBlock({ title, text, qrCode }) {
  return (
    <div className={qrCode ? "ea-flex ea-gap ea-center" : ""} style={{ maxWidth: "100mm", fontSize: "8.5pt" }}>
      <div className="ea-thai ea-muted">
        <div className="ea-bold ea-gold" style={{ marginBottom: 4 }}>{title}</div>
        <TextLines value={text} />
      </div>
      {qrCode && <img src={qrCode} className="ea-qr" alt="QR code" />}
    </div>
  );
}

function GoodsReceiptNote({ text, qrCode }) {
  return (
    <section className="ea-card" style={{ marginTop: 10 }}>
      <div className="ea-card-head">
        <div className="ea-card-icon">📝</div>
        <div className="ea-card-title ea-thai">บันทึกการรับของ</div>
      </div>
      <div className="ea-card-body ea-flex ea-between ea-center ea-gap">
        <TextLines value={text} />
        {qrCode && <img src={qrCode} className="ea-qr" alt="QR code" />}
      </div>
    </section>
  );
}

function Totals({ totals, currency }) {
  const rows = totals.rows || [];
  const grand = totals.grandTotal ?? totals.total ?? totals.netReceived;

  return (
    <div className="ea-totals">
      {rows.map((row, index) => (
        <div key={`${row.label}-${index}`} className={cn("ea-total-row", row.tone)}>
          <span className="ea-total-label ea-thai">{row.label}</span>
          <span className="ea-total-value">{typeof row.value === "string" ? row.value : number(row.value)}</span>
        </div>
      ))}
      {totals.wht ? (
        <div className="ea-total-row deduct">
          <span className="ea-total-label ea-thai">หัก ณ ที่จ่าย</span>
          <span className="ea-total-value">-{number(totals.wht)}</span>
        </div>
      ) : null}
      <div className="ea-total-row ea-total-grand">
        <span className="ea-thai">{totals.grandLabel || "ยอดรวม"}</span>
        <span>{money(grand, totals.currency || currency)}</span>
      </div>
    </div>
  );
}

function ApprovalLadder({ approvals }) {
  const steps =
    approvals || [
      { label: "1. ผู้ขอ", name: "คุณอาบู · 8 พ.ค. 2569" },
      { label: "2. ฝ่ายการเงิน", name: "น้องยะ · 8 พ.ค. 2569" },
      { label: "3. CEO sign-off", name: "คุณอาบู · 8 พ.ค. 2569" },
    ];

  return (
    <section className="ea-card" style={{ margin: "10px 0" }}>
      <div className="ea-card-head">
        <div className="ea-card-icon">✓</div>
        <div className="ea-card-title ea-thai">ขั้นตอนการอนุมัติ · Approval Ladder</div>
      </div>
      <div className="ea-card-body" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, fontSize: "8.5pt" }}>
        {steps.map((step, index) => (
          <div key={`${step.label}-${index}`} className="ea-thai" style={{ borderLeft: "3px solid #1f8a5c", padding: "4px 8px", background: "#f0f9f4" }}>
            <div className="ea-bold" style={{ color: "#1f8a5c" }}>✓ {step.label}</div>
            <div className="ea-muted">{step.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Signatures({ config, signatures, stampUrl }) {
  const left = signatures.left || {};
  const right = signatures.right || {};

  return (
    <div className="ea-sig-grid">
      <SignatureBox label={left.label || config.leftSignature} name={left.name} signed={left.signed !== false} />
      <div style={{ textAlign: "center", alignSelf: "center" }}>
        {stampUrl ? <img src={stampUrl} className="ea-stamp" alt="EA company stamp" /> : <div className="ea-stamp-placeholder ea-thai">ตราปั๊ม<br />บริษัท</div>}
      </div>
      <SignatureBox label={right.label || config.rightSignature} name={right.name} signed={right.signed === true} />
    </div>
  );
}

function SignatureBox({ label, name, signed }) {
  return (
    <div className="ea-sig-box">
      <div className={cn("ea-sig-line", signed && "signed")} />
      <div className="ea-sig-label ea-thai">{label}</div>
      <div className="ea-sig-name ea-thai">{name}</div>
    </div>
  );
}
