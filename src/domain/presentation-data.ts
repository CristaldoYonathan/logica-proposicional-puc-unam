import type { Connector } from "./types";

export const presentationMeta = {
  title: "Lógica Proposicional",
  subtitle: "Profesorado Universitario en Computación · UNaM",
  authors: "Soutus, Lucrecia · Olesnek, Daniela",
};

export const presentationBullets = [
  "Base del razonamiento en Algoritmos, Matemática e Informática.",
  "Proposición: enunciado V o F, nunca ambos. Preguntas y exclamaciones no lo son.",
  "Dos actividades: emparejar enunciados y completar tablas de verdad.",
];

export const connectors: Connector[] = [
  { symbol: "¬", name: "Negación", example: "No es de día" },
  { symbol: "∧", name: "Conjunción", example: "Estudio y aprendo" },
  { symbol: "∨", name: "Disyunción", example: "Flores o chocolates" },
  { symbol: "⇒", name: "Implicación", example: "Si llueve, me mojo" },
  { symbol: "↔", name: "Doble impl.", example: "Viajo si y sólo si…" },
  { symbol: "⊻", name: "Dif. simétrica", example: "Apruebo o repruebo" },
];

export const appSteps = [
  { key: "presentation" as const, label: "Inicio" },
  { key: "activity1" as const, label: "Actividad 1" },
  { key: "activity2" as const, label: "Actividad 2" },
];
