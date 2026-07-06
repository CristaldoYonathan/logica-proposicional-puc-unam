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
          className="flex shrink-0 flex-wrap items-center gap-4 rounded-3xl bg-grape-soft px-5 py-4 shadow-sm sm:px-7 sm:py-6"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-grape shadow-sm sm:h-14 sm:w-14">
            <Brain size={26} strokeWidth={2} />
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-bold tracking-tight sm:text-3xl">
              {presentationMeta.title}
            </h1>
            <p className="truncate text-xs text-ink/60 sm:text-sm">
              {presentationMeta.subtitle} · {presentationMeta.authors}
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
