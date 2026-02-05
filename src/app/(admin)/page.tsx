import data from '@/data/cleaned_startup_funding.json';
import { applyFilters } from '@/utils/ApplyFilters';
import type { Metadata } from "next";
import { Metrics } from "@/components/dashboard/Metrics";
import ProjectDescription from "@/components/dashboard/ProjectDescription";
import FundingChart from "@/components/dashboard/FundingChart";
import StartupListing from "@/components/dashboard/StartupList";
import { Description } from "@/components/dashboard/Description";

export const metadata: Metadata = {
  title:
    "Startup India",
  description: "This is the largest directory of Indian Startup Funding",
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

export default function dashboard({ searchParams }: PageProps) {

  const filters = {
    search: searchParams.q,
    industry: searchParams.industry,
    city: searchParams.city,
    investor: searchParams.investor,
    investmentType: searchParams.investmentType,
  };

  const filteredData = applyFilters(data, filters);

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <Description />
      </div>
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <Metrics />

        <FundingChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <ProjectDescription />
      </div>

      <div className="col-span-12">
        <StartupListing data={filteredData}/>
      </div>
    </div>
  );
}
