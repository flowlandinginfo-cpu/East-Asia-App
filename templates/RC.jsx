import React from "react";
import { PremiumDocument, buildDocProps } from "./shared.jsx";

const RC = ({ company, doc, party, lines, totals, signatures, qrCode }) => (
  <PremiumDocument
    {...buildDocProps("RC", { company, doc, party, lines, totals, signatures, qrCode })}
  />
);

export default RC;
