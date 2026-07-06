"use client";

import { ArrowRight, RotateCcw, Send } from "lucide-react";
import { useActivity1 } from "@/hooks/useActivity1";
import MatchCard from "./MatchRow";
import Button from "@/ui/Button";
import ScoreBanner from "@/ui/ScoreBanner";
import Shell, { ShellBody, ShellFooter } from "@/ui/Shell";
import StepBar from "@/ui/StepBar";

interface Activity1ViewProps {
  onComplete: () => void;
}

export default function Activity1View({ onComplete }: Activity1ViewProps) {
  const act = useActivity1();

  return (
    <Shell>
      <StepBar step={1} label="Actividad 1 · Emparejá cada enunciado" />
      <ShellBody>
        {act.submitted && (
          <ScoreBanner
            correct={act.correctCount}
            total={act.total}
            label={act.correctCount === act.total ? "¡Todas correctas!" : "Tu resultado"}
          />
        )}

        <div className="grid min-h-0 flex-1 content-start gap-2 overflow-auto pb-1 sm:grid-cols-2 sm:gap-3">
          {act.results.map((item, i) => (
            <MatchCard
              key={item.id}
              index={i}
              text={item.text}
              value={act.answers[item.id]}
              submitted={act.submitted}
              isCorrect={item.isCorrect}
              correctExpression={item.correctExpression}
              explanation={item.explanation}
              onChange={(v) => act.setAnswer(item.id, v)}
            />
          ))}
        </div>
      </ShellBody>

      <ShellFooter>
        {!act.submitted ? (
          <Button onClick={act.submit} disabled={!act.allAnswered} className="w-full sm:w-auto">
            <Send size={17} strokeWidth={2.2} /> Enviar y corregir
          </Button>
        ) : (
          <>
            <Button variant="ghost" onClick={act.reset}>
              <RotateCcw size={17} strokeWidth={2.2} /> Reintentar
            </Button>
            <Button variant="success" onClick={onComplete}>
              Actividad 2 <ArrowRight size={17} strokeWidth={2.2} />
            </Button>
          </>
        )}
      </ShellFooter>
    </Shell>
  );
}
