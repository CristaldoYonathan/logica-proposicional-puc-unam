"use client";

import { motion } from "framer-motion";
import type { TruthValue } from "@/domain/types";

interface TruthCellProps {
  value: TruthValue | "";
  correct: TruthValue;
  submitted: boolean;
  onSelect: (v: TruthValue) => void;
}

export default function TruthCell({
  value,
  correct,
  submitted,
  onSelect,
}: TruthCellProps) {
  if (submitted) {
    const ok = value === correct;
    return (
      <motion.span
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold sm:h-11 sm:w-11 sm:text-base ${
          ok ? "bg-mint" : "bg-candy"
        }`}
        title={ok ? "Correcto" : `Correcto: ${correct}`}
      >
        {value}
      </motion.span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(value === "V" ? "F" : "V")}
      title="Tocá para alternar V / F"
      className={`h-9 w-9 rounded-xl text-sm font-bold transition-colors sm:h-11 sm:w-11 sm:text-base ${
        value === "V"
          ? "bg-bubble shadow-sm"
          : value === "F"
            ? "bg-grape shadow-sm"
            : "bg-cream text-ink/30 hover:bg-line/60 hover:text-ink"
      }`}
    >
      {value === "" ? "?" : value}
    </button>
  );
}
