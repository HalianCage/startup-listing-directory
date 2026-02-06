"use client";
import { useRouter } from "next/navigation";

type Startup = {
  Sr_No: Number;
  Date: string;
  StartupName: string;
  Industry: string;
  SubVertical: string;
  City: string;
  Investors: string;
  InvestmentType: string;
  Amount: string;
  Remarks: string | null;
};

export default function StartupListing({ data }: { data: Startup[] }) {
  const router = useRouter();

  if (!data.length) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <p className="text-gray-500 dark:text-gray-400">No startups match the selected filters.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Startups
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Scroll through, or use the filters on the left to find what you are looking for
          </p>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Showing {data.length} results
          </p>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="border-b border-gray-200 dark:border-gray-700">
            <tr className="text-left text-gray-500 dark:text-gray-400">
              <th className="py-2">Startup</th>
              <th>Industry</th>
              <th>Location</th>
              <th>Funding Raised</th>
            </tr>
          </thead>
          <tbody>
            {data.map(startup => (
              <tr
                key={startup.Sr_No.toString()}
                onClick={() => router.push(`/companies/${startup.Sr_No.toString()}`)}
                className="border-b border-gray-200 last:border-0 dark:border-gray-700 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.05]"
              >
                <td className="py-3 font-medium text-gray-800 dark:text-white/90">
                  {startup.StartupName}
                </td>
                <td className="text-gray-600 dark:text-gray-300">{startup.Industry}</td>
                <td className="text-gray-600 dark:text-gray-300">{startup.City}</td>
                <td className="text-gray-600 dark:text-gray-300">{startup.Amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}