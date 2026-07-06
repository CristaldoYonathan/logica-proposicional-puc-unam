"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { logicalExpressions } from "@/domain/activity1-data";
import type { LogicalExpression } from "@/domain/types";

interface MatchCardProps {
  index: number;
  text: string;
  value: LogicalExpression | "";
  submitted: boolean;
  isCorrect: boolean;
  correctExpression: LogicalExpression;
  explanation: string;
  onChange: (value: LogicalExpression) => void;
}

export default function MatchCard({
  index,
  text,
  value,
  submitted,
  isCorrect,
  correctExpression,
  explanation,
  onChange,
}: MatchCardProps) {
  const cardBg = submitted ? (isCorrect ? "bg-mint-soft" : "bg-candy-soft") : "bg-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className={`flex flex-col gap-2 rounded-2xl p-3 shadow-sm sm:p-4 ${cardBg}`}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sun text-[11px] font-bold">
          {index + 1}
        </span>
        <p className="min-w-0 flex-1 text-sm font-semibold leading-snug sm:text-base">
          {text}
        </p>
        {submitted && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
              isCorrect ? "bg-mint" : "bg-candy"
            }`}
          >
            {isCorrect ? <Check size={15} strokeWidth={2.6} /> : <X size={15} strokeWidth={2.6} />}
          </motion.span>
        )}
      </div>

      <select
        value={value}
        disabled={submitted}
        onChange={(e) => onChange(e.target.value as LogicalExpression)}
        className="w-full rounded-xl border border-line bg-white px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-bubble disabled:opacity-70"
      >
        <option value="">Elegí una expresión…</option>
        {logicalExpressions.map((expr) => (
          <option key={expr} value={expr}>
            {expr}
          </option>
        ))}
      </select>

      {submitted && !isCorrect && (
        <p className="text-xs leading-snug text-ink/70">
          Correcta: <span className="font-mono font-semibold">{correctExpression}</span> · {explanation}
        </p>
      )}
    </motion.div>
  );
}
