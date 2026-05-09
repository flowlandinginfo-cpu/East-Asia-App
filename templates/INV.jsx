import React from "react";
import { PremiumDocument, buildDocProps } from "./shared.jsx";

const INV = ({ company, doc, party, lines, totals, signatures, qrCode }) => (
  <PremiumDocument
    {...buildDocProps("INV", { company, doc, party, lines, totals, signatures, qrCode })}
  />
);

export default INV;
