"use client";

import { motion } from "framer-motion";
import { BookOpen, Puzzle, Table2, type LucideIcon } from "lucide-react";

const steps: { icon: LucideIcon; label: string }[] = [
  { icon: BookOpen, label: "Inicio" },
  { icon: Puzzle, label: "Actividad 1" },
  { icon: Table2, label: "Actividad 2" },
];

interface StepBarProps {
  step: number;
  label: string;
}

export default function StepBar({ step, label }: StepBarProps) {
  return (
    <header className="shrink-0 border-b border-line bg-white/70 px-4 py-3 backdrop-blur sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="hidden rounded-full bg-grape-soft px-3 py-1 font-mono text-xs font-semibold text-ink/70 sm:inline">
            p ∧ q
          </span>
          <h1 className="text-sm font-bold leading-snug tracking-tight sm:text-xl">
            {label}
          </h1>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const active = i === step;
            const done = i < step;
            return (
              <motion.span
                key={s.label}
                animate={{ scale: active ? 1.08 : 1 }}
                title={s.label}
                className={`flex h-9 w-9 items-center justify-center rounded-full sm:h-10 sm:w-10 ${
                  active
                    ? "bg-sun shadow-sm"
                    : done
                      ? "bg-mint text-ink/70"
                      : "bg-cream text-ink/40"
                }`}
              >
                <Icon size={17} strokeWidth={2.2} />
              </motion.span>
            );
          })}
        </div>
      </div>
    </header>
  );
}
