"use client";

import { motion } from "framer-motion";
import { PartyPopper, Target } from "lucide-react";

interface ScoreBannerProps {
  correct: number;
  total: number;
  label: string;
}

export default function ScoreBanner({ correct, total, label }: ScoreBannerProps) {
  const pct = Math.round((correct / total) * 100);
  const perfect = correct === total;
  const Icon = perfect ? PartyPopper : Target;

  return (
    <motion.div
      initial={{ y: -14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 350, damping: 24 }}
      className={`flex shrink-0 items-center justify-between gap-3 rounded-2xl px-4 py-3 shadow-sm sm:px-5 ${
        perfect ? "bg-mint-soft" : "bg-candy-soft"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full ${
            perfect ? "bg-mint" : "bg-candy"
          }`}
        >
          <Icon size={17} strokeWidth={2.2} />
        </span>
        <span className="text-sm font-semibold sm:text-base">{label}</span>
      </div>
      <span className="rounded-full bg-white px-3.5 py-1.5 text-sm font-bold tabular-nums shadow-sm sm:text-base">
        {correct}/{total} · {pct}%
      </span>
    </motion.div>
  );
}
