export type LogicalExpression =
  | "(p ∧ q)"
  | "(p ∨ q)"
  | "(¬p)"
  | "(p ↔ q)"
  | "(p ∧ ¬q)"
  | "(p ⊻ q)"
  | "(p ⇒ q)"
  | "(¬(¬p))";

export type TruthValue = "V" | "F";

export interface Statement {
  id: string;
  text: string;
  correctExpression: LogicalExpression;
  explanation: string;
}

export interface TruthTableRow {
  p: TruthValue;
  q: TruthValue;
  notP: TruthValue;
  pAndQ: TruthValue;
  pOrQ: TruthValue;
  pImpliesQ: TruthValue;
  pIffQ: TruthValue;
  pXorQ: TruthValue;
}

export type TruthColumnKey = keyof Omit<TruthTableRow, "p" | "q">;

export interface TruthColumn {
  key: TruthColumnKey;
  label: string;
}

export interface Connector {
  symbol: string;
  name: string;
  example: string;
}

export type AppStep = "presentation" | "activity1" | "activity2";
