import type { TruthColumn, TruthTableRow } from "./types";

export const truthTableColumns: TruthColumn[] = [
  { key: "notP", label: "¬p" },
  { key: "pAndQ", label: "p∧q" },
  { key: "pOrQ", label: "p∨q" },
  { key: "pImpliesQ", label: "p⇒q" },
  { key: "pIffQ", label: "p↔q" },
  { key: "pXorQ", label: "p⊻q" },
];

export const truthTableAnswers: TruthTableRow[] = [
  { p: "V", q: "V", notP: "F", pAndQ: "V", pOrQ: "V", pImpliesQ: "V", pIffQ: "V", pXorQ: "F" },
  { p: "V", q: "F", notP: "F", pAndQ: "F", pOrQ: "V", pImpliesQ: "F", pIffQ: "F", pXorQ: "V" },
  { p: "F", q: "V", notP: "V", pAndQ: "F", pOrQ: "V", pImpliesQ: "V", pIffQ: "F", pXorQ: "V" },
  { p: "F", q: "F", notP: "V", pAndQ: "F", pOrQ: "F", pImpliesQ: "V", pIffQ: "V", pXorQ: "F" },
];
