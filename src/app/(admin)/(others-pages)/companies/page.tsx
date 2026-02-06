import data from '@/data/cleaned_startup_funding.json';
import { applyFilters } from '@/utils/ApplyFilters';
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import StartupListing from "@/components/dashboard/StartupList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "StartUp Listing Page",
  description: "View all startup companies and their funding information",
};

type PageProps = {
  searchParams: Promise<{
    q?: string;
    industry?: string;
    city?: string;
    investor?: string;
    investmentType?: string;
    minAmount?: string;
    maxAmount?: string;
  }>;
};

export default async function CompaniesPage({ searchParams }: PageProps) {

  const resolvedSearchParams = await searchParams;

  const filters = {
    q: resolvedSearchParams.q,
    industry: resolvedSearchParams.industry,
    city: resolvedSearchParams.city,
    investor: resolvedSearchParams.investor,
    investmentType: resolvedSearchParams.investmentType,
    minAmount: resolvedSearchParams.minAmount,
    maxAmount: resolvedSearchParams.maxAmount,
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
