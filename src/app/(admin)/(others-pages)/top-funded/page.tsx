import data from "@/data/cleaned_startup_funding.json";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import StartupListing from "@/components/dashboard/StartupList";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Top Funded Companies",
  description: "Top 10 companies with the most funding raised",
};

function parseAmount(amount: string | null | undefined): number {
  if (!amount) return 0;
  const normalized = amount.replace(/,/g, "").trim();
  const value = Number(normalized);
  return Number.isFinite(value) ? value : 0;
}

export default function TopFundedCompaniesPage() {
  const top10 = [...data]
    .sort((a, b) => parseAmount(b.Amount) - parseAmount(a.Amount))
    .slice(0, 10);

  return (
    <div>
      <PageBreadcrumb pageTitle="Top Funded Companies" />

      <div className="mb-6 rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Top 10 Companies by Funding Raised
        </h3>
        <p className="mt-2 text-gray-500 text-theme-sm dark:text-gray-400">
          This page shows the companies with the highest reported funding in the
          dataset. Click a company to view its details.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <StartupListing data={top10} />
      </div>
    </div>
  );
}
