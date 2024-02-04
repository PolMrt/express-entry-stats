import { DataController } from "@/lib/DataController";
import { YearSummary } from "./YearSummary";
import { YearContent } from "./YearContent";

export function YearDetails({ year }: { year: number }) {
  return (
    <details className="group rounded-lg border border-gray-300 open:ring-2 open:ring-gray-400 open:ring-offset-2 [&:::-webkit-details-marker]:hidden">
      <YearSummary year={year} />
      <YearContent year={year} />
    </details>
  );
}
