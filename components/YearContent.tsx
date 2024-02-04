import { DataController } from "@/lib/DataController";
import classNames from "classnames";

export function YearContent({ year }: { year: number }) {
  const dc = DataController.getInstance();
  const dps = dc.getData(year);

  const categories = dc.getCategories(year);

  return (
    <div className="border-t border-gray-300 px-6 pb-6 pt-4">
      {/* {categories.map((category) => (
        <div>{category}</div>
      ))} */}

      <table className="w-full table-auto">
        <thead>
          <TableCell className="font-bold">Id</TableCell>
          <TableCell className="text-center font-bold">Date</TableCell>
          <TableCell className="font-bold">Category</TableCell>
          <TableCell className="whitespace-nowrap text-right font-bold">
            Min CRS
          </TableCell>
          <TableCell className="text-right font-bold">Invitations</TableCell>
        </thead>
        {dps.map((data) => (
          <tr key={data.id}>
            <TableCell className="font-bold">#{data.id}</TableCell>
            <TableCell className="text-center text-sm">
              {data.date.format("MM/DD")}
            </TableCell>
            <TableCell className="text-sm text-gray-700">
              {data.category}
            </TableCell>
            <TableCell className="text-right font-mono text-gray-700">
              {data.minCrs}
            </TableCell>
            <TableCell className="text-right font-mono text-gray-700">
              {data.nbInvitations}
            </TableCell>
          </tr>
        ))}
      </table>
    </div>
  );
}

function TableCell({
  children,
  className = "",
}: {
  children: any;
  className?: string;
}) {
  return (
    <td className={classNames("border border-gray-200 px-4 py-2", className)}>
      {children}
    </td>
  );
}
