"use client";

import { motion } from "framer-motion";
import type { Connector } from "@/domain/types";

const chips = [
  { bg: "bg-sun-soft", badge: "bg-sun" },
  { bg: "bg-bubble-soft", badge: "bg-bubble" },
  { bg: "bg-mint-soft", badge: "bg-mint" },
  { bg: "bg-candy-soft", badge: "bg-candy" },
  { bg: "bg-grape-soft", badge: "bg-grape" },
  { bg: "bg-cream", badge: "bg-white" },
];

interface ConnectorGridProps {
  items: Connector[];
}

export default function ConnectorGrid({ items }: ConnectorGridProps) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
      {items.map((item, i) => {
        const c = chips[i % chips.length];
        return (
          <motion.div
            key={item.symbol}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.05 }}
            whileHover={{ y: -3 }}
            className={`flex items-center gap-3 rounded-2xl px-3.5 py-3 shadow-sm ${c.bg}`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-lg font-bold shadow-sm ${c.badge}`}
            >
              {item.symbol}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{item.name}</p>
              <p className="truncate text-xs text-ink/50">{item.example}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
