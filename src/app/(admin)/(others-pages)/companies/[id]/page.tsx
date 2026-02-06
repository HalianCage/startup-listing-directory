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

  return (
    <div>
      <PageBreadcrumb pageTitle="Company Details" />
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mb-6">
          <BackButton />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90 sm:text-3xl">
              {company.StartupName}
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Industry
                </h3>
                <p className="text-base text-gray-800 dark:text-white/90">
                  {company.Industry}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Sub-Vertical
                </h3>
                <p className="text-base text-gray-800 dark:text-white/90">
                  {company.SubVertical}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Location
                </h3>
                <p className="text-base text-gray-800 dark:text-white/90">
                  {company.City}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Date
                </h3>
                <p className="text-base text-gray-800 dark:text-white/90">
                  {company.Date}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Investors
                </h3>
                <p className="text-base text-gray-800 dark:text-white/90">
                  {company.Investors}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Investment Type
                </h3>
                <p className="text-base text-gray-800 dark:text-white/90">
                  {company.InvestmentType}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Amount
                </h3>
                <p className="text-base font-semibold text-gray-800 dark:text-white/90">
                  {company.Amount+" $"}
                </p>
              </div>
            </div>
          </div>

          {company.Remarks && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Remarks
              </h3>
              <p className="text-base text-gray-800 dark:text-white/90">
                {company.Remarks}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
