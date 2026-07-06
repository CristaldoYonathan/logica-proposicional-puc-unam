import type { LogicalExpression, Statement } from "./types";

export const logicalExpressions: LogicalExpression[] = [
  "(p ∧ q)",
  "(p ∨ q)",
  "(¬p)",
  "(p ↔ q)",
  "(p ∧ ¬q)",
  "(p ⊻ q)",
  "(p ⇒ q)",
  "(¬(¬p))",
];

export const activity1Statements: Statement[] = [
  {
    id: "s1",
    text: "Canto y bailo",
    correctExpression: "(p ∧ q)",
    explanation: "«Y» = conjunción (∧).",
  },
  {
    id: "s2",
    text: "Te regalo flores o chocolates",
    correctExpression: "(p ∨ q)",
    explanation: "«O» = disyunción (∨).",
  },
  {
    id: "s3",
    text: "Si salto, entonces me caigo",
    correctExpression: "(p ⇒ q)",
    explanation: "«Si… entonces…» = implicación (⇒).",
  },
  {
    id: "s4",
    text: "No es de día",
    correctExpression: "(¬p)",
    explanation: "«No» = negación (¬).",
  },
  {
    id: "s5",
    text: "Viajo si y sólo si tengo plata",
    correctExpression: "(p ↔ q)",
    explanation: "«Si y sólo si» = doble implicación (↔).",
  },
  {
    id: "s6",
    text: "Estudio y no me aburro",
    correctExpression: "(p ∧ ¬q)",
    explanation: "Conjunción con negación: p ∧ ¬q.",
  },
  {
    id: "s7",
    text: "Es falso que no fui",
    correctExpression: "(¬(¬p))",
    explanation: "Doble negación: ¬(¬p) ≡ p.",
  },
  {
    id: "s8",
    text: "Apruebo el examen ó lo repruebo",
    correctExpression: "(p ⊻ q)",
    explanation: "Disyunción exclusiva (⊻).",
  },
];
