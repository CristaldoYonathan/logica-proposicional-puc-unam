"use client";

import { useMemo, useState } from "react";
import { truthTableAnswers, truthTableColumns } from "@/domain/activity2-data";
import type { TruthColumnKey, TruthValue } from "@/domain/types";

type RowAnswers = Record<TruthColumnKey, TruthValue | "">;

const emptyRow = (): RowAnswers =>
  Object.fromEntries(truthTableColumns.map((c) => [c.key, ""])) as RowAnswers;

export function useActivity2() {
  const [answers, setAnswers] = useState<RowAnswers[]>(() =>
    truthTableAnswers.map(() => emptyRow())
  );
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = answers.every((row) =>
    truthTableColumns.every((col) => row[col.key] !== "")
  );

  const correctCells = useMemo(
    () =>
      truthTableAnswers.reduce(
        (acc, row, i) =>
          acc +
          truthTableColumns.filter((col) => answers[i][col.key] === row[col.key])
            .length,
        0
      ),
    [answers]
  );

  const totalCells = truthTableAnswers.length * truthTableColumns.length;

  const setCell = (row: number, key: TruthColumnKey, value: TruthValue) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[row] = { ...next[row], [key]: value };
      return next;
    });
  };

  const submit = () => allAnswered && setSubmitted(true);
  const reset = () => {
    setAnswers(truthTableAnswers.map(() => emptyRow()));
    setSubmitted(false);
  };

  return {
    answers,
    submitted,
    allAnswered,
    correctCells,
    totalCells,
    setCell,
    submit,
    reset,
  };
}
