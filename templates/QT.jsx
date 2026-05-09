import React from "react";
import { PremiumDocument, buildDocProps } from "./shared.jsx";

const QT = ({ company, doc, party, lines, totals, signatures, qrCode }) => (
  <PremiumDocument
    {...buildDocProps("QT", { company, doc, party, lines, totals, signatures, qrCode })}
  />
);

export default QT;
