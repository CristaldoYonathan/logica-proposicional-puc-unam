"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, Home, Sparkles } from "lucide-react";
import { thanksContent } from "@/domain/thanks-data";
import FloatingSymbols from "./FloatingSymbols";
import Button from "@/ui/Button";
import Shell, { ShellBody, ShellFooter } from "@/ui/Shell";

interface ThanksViewProps {
  onRestart: () => void;
}

const fade = (delay: number, reduce: boolean) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { delay, duration: 0.35, ease: "easeOut" as const },
      };

export default function ThanksView({ onRestart }: ThanksViewProps) {
  const reduce = useReducedMotion();

  return (
    <Shell>
      <ShellBody>
        <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-2 text-center sm:gap-5">
          <FloatingSymbols />

          <motion.div
            {...fade(0.1, !!reduce)}
            animate={reduce ? {} : { rotate: [0, -6, 6, 0] }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex h-16 w-16 items-center justify-center rounded-3xl bg-sun shadow-sm sm:h-20 sm:w-20"
          >
            <Sparkles className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={2.2} />
          </motion.div>

          <motion.h2
            {...fade(0.2, !!reduce)}
            className="text-2xl font-extrabold tracking-tight sm:text-4xl"
          >
            {thanksContent.title}
          </motion.h2>

          <motion.p
            {...fade(0.3, !!reduce)}
            className="max-w-md text-sm leading-relaxed text-ink/70 sm:text-base"
          >
            {thanksContent.message}
          </motion.p>

          <motion.div
            {...fade(0.4, !!reduce)}
            className="flex items-center gap-2 rounded-full bg-candy-soft px-4 py-2 text-sm font-semibold"
          >
            <Heart className="h-4 w-4 fill-candy text-candy" strokeWidth={2} />
            {thanksContent.authors}
          </motion.div>

          <motion.p {...fade(0.5, !!reduce)} className="text-xs text-ink/50 sm:text-sm">
            {thanksContent.institution}
          </motion.p>
        </div>
      </ShellBody>

      <ShellFooter>
        <Button onClick={onRestart} className="w-full sm:w-auto">
          <Home size={17} strokeWidth={2.2} /> Volver al inicio
        </Button>
      </ShellFooter>
    </Shell>
  );
}
