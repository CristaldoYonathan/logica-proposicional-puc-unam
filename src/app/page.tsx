"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { AppStep } from "@/domain/types";
import PresentationView from "@/features/presentation/PresentationView";
import Activity1View from "@/features/activity1/Activity1View";
import Activity2View from "@/features/activity2/Activity2View";

const views: Record<AppStep, (go: (s: AppStep) => void) => React.ReactNode> = {
  presentation: (go) => <PresentationView onStart={() => go("activity1")} />,
  activity1: (go) => <Activity1View onComplete={() => go("activity2")} />,
  activity2: (go) => <Activity2View onBack={() => go("activity1")} />,
};

export default function HomePage() {
  const [step, setStep] = useState<AppStep>("presentation");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -24 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="h-dvh"
      >
        {views[step](setStep)}
      </motion.div>
    </AnimatePresence>
  );
}
