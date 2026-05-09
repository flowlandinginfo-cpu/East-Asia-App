import React from "react";
import { PremiumDocument, buildDocProps } from "./shared.jsx";

const PR = ({ company, doc, party, lines, totals, signatures, qrCode }) => (
  <PremiumDocument
    {...buildDocProps("PR", { company, doc, party, lines, totals, signatures, qrCode })}
  />
);

export default PR;
