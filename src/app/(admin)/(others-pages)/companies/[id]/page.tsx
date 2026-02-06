import data from '@/data/cleaned_startup_funding.json';
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import BackButton from "./BackButton";

export const metadata: Metadata = {
  title: "Company Details Page",
  description: "View detailed information about the company",
};

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CompanyDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const companyId = parseInt(id, 10);
  
  if (isNaN(companyId)) {
    notFound();
  }
  
  const company = data.find((item) => item.Sr_No === companyId);

  if (!company) {
    notFound();
  }

  const investors: string[] = (company.Investors ?? "")
    .split(",")
    .map((i: string) => i.trim())
    .filter(Boolean);

  return (
    <div>
      <PageBreadcrumb pageTitle="Company Details" />
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mb-6">
          <BackButton />
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.02] sm:px-6 sm:pt-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90 sm:text-3xl">
                  {company.StartupName}
                </h1>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 ring-1 ring-gray-200 dark:bg-gray-900 dark:text-gray-200 dark:ring-gray-800">
                    {company.Industry}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 ring-1 ring-gray-200 dark:bg-gray-900 dark:text-gray-200 dark:ring-gray-800">
                    {company.City}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 ring-1 ring-gray-200 dark:bg-gray-900 dark:text-gray-200 dark:ring-gray-800">
                    {company.InvestmentType}
                  </span>
                </div>
              </div>

              <div className="w-full md:w-[320px]">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Funding Raised
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-[#f89422]">
                    {company.Amount + " $"}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Date</div>
                    <div className="text-sm font-semibold text-[#a4cd39]">
                      {company.Date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
              <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">
                Company Overview
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Sub-Vertical
                  </div>
                  <div className="mt-1 text-base text-gray-800 dark:text-white/90">
                    {company.SubVertical}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Location
                  </div>
                  <div className="mt-1 text-base text-gray-800 dark:text-white/90">
                    {company.City}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
              <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">
                Investors
              </h3>

              {investors.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {investors.map((investor: string) => (
                    <span
                      key={investor}
                      className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 ring-1 ring-gray-200 dark:bg-gray-900 dark:text-gray-200 dark:ring-gray-800"
                    >
                      {investor}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  No investor information available.
                </div>
              )}

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-white/[0.02]">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Industry
                  </div>
                  <div className="mt-1 text-base font-semibold text-gray-800 dark:text-white/90">
                    {company.Industry}
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-white/[0.02]">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Investment Type
                  </div>
                  <div className="mt-1 text-base font-semibold text-gray-800 dark:text-white/90">
                    {company.InvestmentType}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {company.Remarks && (
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
              <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">
                Remarks
              </h3>
              <p className="mt-3 text-base text-gray-700 dark:text-gray-200">
                {company.Remarks}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
