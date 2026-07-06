"use client";

import { useMemo, useState } from "react";
import { activity1Statements } from "@/domain/activity1-data";
import type { LogicalExpression } from "@/domain/types";

const emptyAnswers = () =>
  Object.fromEntries(activity1Statements.map((s) => [s.id, ""])) as Record<
    string,
    LogicalExpression | ""
  >;

export function useActivity1() {
  const [answers, setAnswers] = useState(emptyAnswers);
  const [submitted, setSubmitted] = useState(false);

  const results = useMemo(
    () =>
      activity1Statements.map((s) => ({
        ...s,
        userAnswer: answers[s.id],
        isCorrect: answers[s.id] === s.correctExpression,
      })),
    [answers]
  );

  const correctCount = results.filter((r) => r.isCorrect).length;
  const allAnswered = activity1Statements.every((s) => answers[s.id] !== "");

  const setAnswer = (id: string, value: LogicalExpression) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const submit = () => allAnswered && setSubmitted(true);
  const reset = () => {
    setAnswers(emptyAnswers());
    setSubmitted(false);
  };

  return {
    results,
    answers,
    submitted,
    allAnswered,
    correctCount,
    total: activity1Statements.length,
    setAnswer,
    submit,
    reset,
  };
}
