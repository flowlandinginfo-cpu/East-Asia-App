import React from "react";
import { PremiumDocument, buildDocProps } from "./shared.jsx";

const PO = ({ company, doc, party, lines, totals, signatures, qrCode }) => (
  <PremiumDocument
    {...buildDocProps("PO", { company, doc, party, lines, totals, signatures, qrCode })}
  />
);

export default PO;
