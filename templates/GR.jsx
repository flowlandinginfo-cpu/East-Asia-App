import React from "react";
import { PremiumDocument, buildDocProps } from "./shared.jsx";

const GR = ({ company, doc, party, lines, totals, signatures, qrCode }) => (
  <PremiumDocument
    {...buildDocProps("GR", { company, doc, party, lines, totals, signatures, qrCode })}
  />
);

export default GR;
