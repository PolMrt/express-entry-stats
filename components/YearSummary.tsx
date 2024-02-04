import { DataController } from "@/lib/DataController";

export function YearSummary({ year }: { year: number }) {
  const dc = DataController.getInstance();
  const dps = dc.getData(year);

  const nbInvitations = dps.reduce((acc, data) => acc + data.nbInvitations, 0);
  const avgCrs = Math.round(
    dps.reduce((acc, data) => acc + data.minCrs, 0) / dps.length,
  );
  const nbDraws = dps.length;

  const minId = dps.reduce((acc, data) => Math.min(acc, data.id), Infinity);
  const maxId = dps.reduce((acc, data) => Math.max(acc, data.id), -Infinity);

  return (
    <summary
      className="w-full"
      style={{
        listStyle: "none",
      }}
    >
      <div>
        <div className="flex items-baseline justify-between px-6 py-4">
          <h2 className="text-2xl font-bold">{year}</h2>
          <p className="font-mono text-sm text-gray-500">
            #{minId} → #{maxId}
          </p>
        </div>
        <div className="grid grid-cols-3 divide-x divide-gray-300 border-y border-gray-300">
          <DataPointYearSummary data={nbInvitations} title="Invitations" />
          <DataPointYearSummary data={avgCrs} title="Average CRS" />
          <DataPointYearSummary data={nbDraws} title="Draws" />
        </div>
        <div className="flex justify-center px-6 py-2">
          <div className="text-sm font-medium uppercase tracking-wider">
            <span className="block group-open:hidden">Show more ↓</span>
            <span className="hidden group-open:block">Show less ↑</span>
          </div>
        </div>
      </div>
    </summary>
  );
}

function DataPointYearSummary({ data, title }: { data: any; title: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-2">
      <div className="text-lg">
        {typeof data === "number" ? data.toLocaleString() : data}
      </div>
      <div className="text-xs uppercase tracking-wide text-gray-400">
        {title}
      </div>
    </div>
  );
}
