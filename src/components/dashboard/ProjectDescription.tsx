"use client";

export default function ProjectDescription() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-white/[0.005] sm:px-6 sm:pt-6">
        <div className="flex justify-between">
          <div>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              Project Description
            </h4>
            <h3 className="mt-5 text-lg font-semibold text-gray-800 dark:text-white/90">
              About the Dataset:
            </h3>
            <p className="mx-auto w-full text-justify text-sm text-gray-500 sm:text-base">
              This platform is powered by a structured dataset of Indian startup funding records. Each entry includes the startup name, industry and sub-vertical, city location, investor details, investment type, funding amount (in USD), date of funding, and additional remarks. The dataset provides a clear snapshot of startup funding activity across India in recent years.
            </p>
            <h3 className="mt-5 text-lg font-semibold text-gray-800 dark:text-white/90">
              Purpose of the Platform
            </h3>
            <p className="mx-auto w-full text-justify text-sm text-gray-500 sm:text-base">
              The objective of this platform is to make Indian startup funding data easy to explore and understand. By using filters and search tools, users can quickly find startups based on industry, location, investors, funding type, or funding amount.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
