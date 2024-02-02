import { DataController } from "@/lib/DataController";

export default async function Home() {
  const dc = new DataController();
  await dc.loadFiles();

  return (
    <main className="max-w-2xl mx-auto">
      Data
      {dc.getYears().map((year) => (
        <details key={year} className="mt-12">
          <summary className="text-lg font-bold">{year}</summary>
          <table className="table-auto border border-gray-200">
            <tr>
              <th className="text-md font-bold border border-gray-200">#</th>
              <th className="text-md font-bold border border-gray-200">
                Category
              </th>
              <th className="text-md font-bold border border-gray-200">
                Min CRS
              </th>
              <th className="text-md font-bold border border-gray-200">
                Invitations
              </th>
            </tr>
            {dc.getData(year).map((data) => (
              <tr key={data.id}>
                <td className="text-md font-bold border border-gray-200">
                  #{data.id}
                </td>
                <td className="border border-gray-200">{data.category}</td>
                <td className="border border-gray-200">{data.minCrs}</td>
                <td className="border border-gray-200">{data.nbInvitations}</td>
              </tr>
            ))}
          </table>
        </details>
      ))}
    </main>
  );
}
