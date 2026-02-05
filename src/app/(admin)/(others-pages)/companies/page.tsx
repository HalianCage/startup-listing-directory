import data from '@/data/cleaned_startup_funding.json';
import { applyFilters } from '@/utils/ApplyFilters';
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import StartupListing from "@/components/dashboard/StartupList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Companies | TailAdmin - Next.js Dashboard Template",
  description: "View all startup companies and their funding information",
};

type PageProps = {
  searchParams: {
    q?: string;
    industry?: string;
    city?: string;
    investor?: string;
    investmentType?: string;
  };
};

export default function CompaniesPage({ searchParams }: PageProps) {
  const filters = {
    search: searchParams.q,
    industry: searchParams.industry,
    city: searchParams.city,
    investor: searchParams.investor,
    investmentType: searchParams.investmentType,
  };

  const filteredData = applyFilters(data, filters);

  return (
    <div>
      <PageBreadcrumb pageTitle="Companies" />
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <StartupListing data={filteredData} />
      </div>
    </div>
  );
}
