"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { thanksContent } from "@/domain/thanks-data";

export default function FloatingSymbols() {
  const reduce = useReducedMotion();
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const items = useMemo(() => {
    const count = mobile ? 4 : 6;
    return thanksContent.badges.slice(0, count).map((sym, i) => ({
      sym,
      left: `${14 + i * (72 / Math.max(count - 1, 1))}%`,
      delay: 0.2 + i * 0.15,
      tone: ["text-sun", "text-bubble", "text-mint", "text-candy", "text-grape", "text-sun"][i],
    }));
  }, [mobile]);

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((item) => (
        <motion.span
          key={item.sym + item.left}
          initial={{ opacity: 0, y: 30, scale: 0.6 }}
          animate={{ opacity: [0, 0.85, 0], y: [30, -10, -50], scale: [0.6, 1, 0.7] }}
          transition={{ duration: 2, delay: item.delay, ease: "easeOut" }}
          className={`absolute bottom-10 font-mono text-lg font-bold sm:text-xl ${item.tone}`}
          style={{ left: item.left }}
        >
          {item.sym}
        </motion.span>
      ))}
    </div>
  );
}
