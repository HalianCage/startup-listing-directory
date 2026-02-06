"use client";

import Badge from "../ui/badge/Badge";
import { ArrowUpIcon, DashIcon, DollarLineIcon, BoxCubeIcon } from "@/icons";
import data from "@/data/cleaned_startup_funding.json";

function parseAmount(value: string | null | undefined) {
  if (!value) return 0;
  const normalized = value.toString().replace(/,/g, "").trim();
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatHumanReadable(value: number) {
  const abs = Math.abs(value);
  const format = (n: number, suffix: "million" | "billion") => {
    const str = n.toFixed(1);
    const trimmed = str.endsWith(".0") ? str.slice(0, -2) : str;
    return `${trimmed} ${suffix}`;
  };

  if (abs >= 1_000_000_000) return format(value / 1_000_000_000, "billion");
  if (abs >= 1_000_000) return format(value / 1_000_000, "million");
  return value.toString();
}

export const Metrics = () => {
  const companiesCount = data.length;
  const totalFunding = data.reduce((sum, item) => sum + parseAmount(item.Amount), 0);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxCubeIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Companies
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {companiesCount}
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            High
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <DollarLineIcon className="text-gray-800 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Funding
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {formatHumanReadable(Math.round(totalFunding))}
            </h4>
          </div>

          <Badge color="warning">
            <DashIcon className="text-error-500" />
            Medium
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
};
