import type { Metadata } from "next";
import Link from "next/link";
import { Metrics } from "@/components/dashboard/Metrics";
import ProjectDescription from "@/components/dashboard/ProjectDescription";
import FundingChart from "@/components/dashboard/FundingChart";
import { Description } from "@/components/dashboard/Description";

export const metadata: Metadata = {
  title:
    "Startup India",
  description: "This is the largest directory of Indian Startup Funding",
};

export default function dashboard() {
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
        <Link href="/companies">
          <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 cursor-pointer transition-all hover:shadow-lg">
            <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
              <div className="w-full">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                  Companies
                </h3>
                <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                  Click here to view all startup companies and their funding information
                </p>
                <p className="mt-2 text-sm font-medium text-brand-500 dark:text-brand-400">
                  View All Companies →
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
