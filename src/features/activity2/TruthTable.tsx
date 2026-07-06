import { truthTableAnswers, truthTableColumns } from "@/domain/activity2-data";
import type { TruthColumnKey, TruthValue } from "@/domain/types";
import TruthCell from "./TruthCell";

interface TruthTableProps {
  answers: Record<TruthColumnKey, TruthValue | "">[];
  submitted: boolean;
  onSelect: (row: number, key: TruthColumnKey, value: TruthValue) => void;
}

export default function TruthTable({
  answers,
  submitted,
  onSelect,
}: TruthTableProps) {
  return (
    <div className="flex h-full items-center justify-center p-1.5 sm:p-4">
      <table className="w-full max-w-2xl table-fixed border-collapse text-center">
        <thead>
          <tr>
            <th className="rounded-l-lg bg-sun-soft py-2 font-mono text-xs sm:text-base">
              p
            </th>
            <th className="bg-sun-soft py-2 font-mono text-xs sm:text-base">q</th>
            {truthTableColumns.map((col, i) => (
              <th
                key={col.key}
                className={`bg-grape-soft py-2 font-mono text-[10px] sm:text-base ${
                  i === truthTableColumns.length - 1 ? "rounded-r-lg" : ""
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {truthTableAnswers.map((row, ri) => (
            <tr key={ri}>
              <td className="pt-2 sm:pt-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sun-soft text-sm font-bold sm:h-11 sm:w-11 sm:text-base">
                  {row.p}
                </span>
              </td>
              <td className="pt-2 sm:pt-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sun-soft text-sm font-bold sm:h-11 sm:w-11 sm:text-base">
                  {row.q}
                </span>
              </td>
              {truthTableColumns.map((col) => (
                <td key={col.key} className="pt-2 sm:pt-3">
                  <TruthCell
                    value={answers[ri][col.key]}
                    correct={row[col.key]}
                    submitted={submitted}
                    onSelect={(v) => onSelect(ri, col.key, v)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
