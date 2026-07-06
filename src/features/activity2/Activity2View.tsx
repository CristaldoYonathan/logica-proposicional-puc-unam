"use client";

import { ArrowLeft, RotateCcw, Send } from "lucide-react";
import { useActivity2 } from "@/hooks/useActivity2";
import TruthTable from "./TruthTable";
import Button from "@/ui/Button";
import ScoreBanner from "@/ui/ScoreBanner";
import Shell, { ShellBody, ShellFooter, ShellScroll } from "@/ui/Shell";
import StepBar from "@/ui/StepBar";

interface Activity2ViewProps {
  onBack: () => void;
}

export default function Activity2View({ onBack }: Activity2ViewProps) {
  const act = useActivity2();

  return (
    <Shell>
      <StepBar step={2} label="Actividad 2 · Tablas de verdad" />
      <ShellBody>
        {act.submitted && (
          <ScoreBanner
            correct={act.correctCells}
            total={act.totalCells}
            label={act.correctCells === act.totalCells ? "¡Tabla perfecta!" : "Tu resultado"}
          />
        )}

        <ShellScroll>
          <TruthTable
            answers={act.answers}
            submitted={act.submitted}
            onSelect={act.setCell}
          />
        </ShellScroll>

        <p className="shrink-0 text-center text-xs text-ink/40">
          Tocá cada celda para alternar entre V y F
        </p>
      </ShellBody>

      <ShellFooter>
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft size={16} strokeWidth={2.5} /> Actividad 1
        </Button>
        {!act.submitted ? (
          <Button onClick={act.submit} disabled={!act.allAnswered}>
            <Send size={16} strokeWidth={2.5} /> Enviar y corregir
          </Button>
        ) : (
          <Button variant="success" onClick={act.reset}>
            <RotateCcw size={16} strokeWidth={2.5} /> Reintentar
          </Button>
        )}
      </ShellFooter>
    </Shell>
  );
}
