"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, CheckCircle2 } from "lucide-react";
import {
  connectors,
  presentationBullets,
  presentationMeta,
} from "@/domain/presentation-data";
import ConnectorGrid from "./ConnectorGrid";
import Button from "@/ui/Button";
import Shell, { ShellBody, ShellFooter } from "@/ui/Shell";

interface PresentationViewProps {
  onStart: () => void;
}

export default function PresentationView({ onStart }: PresentationViewProps) {
  return (
    <Shell>
      <ShellBody>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex shrink-0 flex-col gap-3 rounded-3xl bg-grape-soft px-4 py-4 shadow-sm sm:flex-row sm:items-center sm:gap-4 sm:px-7 sm:py-6"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-grape shadow-sm sm:h-14 sm:w-14">
            <Brain className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
          </span>
          <div className="min-w-0 w-full">
            <h1 className="text-lg font-bold leading-tight tracking-tight sm:text-3xl">
              {presentationMeta.title}
            </h1>
            <p className="mt-1 text-xs leading-snug text-ink/70 sm:text-sm">
              {presentationMeta.subtitle}
            </p>
            <p className="mt-0.5 text-xs leading-snug text-ink/50 sm:text-sm">
              {presentationMeta.authors}
            </p>
          </div>
        </motion.div>

        <div className="grid min-h-0 flex-1 gap-3 overflow-hidden sm:grid-cols-5 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex min-h-0 flex-col gap-3 overflow-auto rounded-3xl bg-white p-4 shadow-sm sm:col-span-2 sm:p-6"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-ink/40">
              ¿De qué se trata?
            </p>
            {presentationBullets.map((text) => (
              <div key={text} className="flex gap-2.5 text-sm leading-relaxed sm:text-base">
                <CheckCircle2 size={18} strokeWidth={2.2} className="mt-0.5 shrink-0 text-mint" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>

          <div className="min-h-0 overflow-auto sm:col-span-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-ink/40">
              Conectores lógicos
            </p>
            <ConnectorGrid items={connectors} />
          </div>
        </div>
      </ShellBody>

      <ShellFooter>
        <Button onClick={onStart} className="w-full sm:w-auto">
          ¡Empezar! <ArrowRight size={18} strokeWidth={2.2} />
        </Button>
      </ShellFooter>
    </Shell>
  );
}
