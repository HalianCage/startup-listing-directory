"use client";

import React, { useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import data from "@/data/cleaned_startup_funding.json";
import Select from "@/components/form/Select";
import { ChevronDownIcon } from "@/icons";

export default function CompanyFiltersSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Get unique values for dropdowns
  const industries = Array.from(new Set(data.map((item) => item.Industry))).sort();
  const cities = Array.from(new Set(data.map((item) => item.City))).sort();

  // Initialize state from URL params
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [industry, setIndustry] = useState(searchParams.get("industry") ?? "");
  const [city, setCity] = useState(searchParams.get("city") ?? "");

  // Update URL params when filters change
  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    startTransition(() => {
      router.push(`/companies?${params.toString()}`);
    });
  }

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      updateFilter("q", query);
    }, 300);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // Update industry filter
  const handleIndustryChange = (value: string) => {
    setIndustry(value);
    updateFilter("industry", value);
  };

  // Update city filter
  const handleCityChange = (value: string) => {
    setCity(value);
    updateFilter("city", value);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setQuery("");
    setIndustry("");
    setCity("");
    router.push("/companies");
  };

  const industryOptions = industries.map((ind) => ({
    value: ind,
    label: ind,
  }));

  const cityOptions = cities.map((cityName) => ({
    value: cityName,
    label: cityName,
  }));

  return (
    <aside className={`fixed top-0 z-40 mt-16 h-screen w-[290px] border-r border-gray-200 bg-white px-5 transition-all duration-300 ease-in-out dark:border-gray-800 dark:bg-gray-900 lg:mt-0 ${isMobileOpen ? "-translate-x-full" : "translate-x-0"} lg:translate-x-0`}>
      <div className="flex flex-col overflow-y-auto py-8 duration-300 ease-linear no-scrollbar">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Filters
          </h2>
        </div>

        <div className="space-y-6">
          {/* Search Input */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-white/90">
              Startup Name
            </label>
            <input
              type="text"
              placeholder="Search startup..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input w-full"
            />
          </div>

          {/* Industry Dropdown */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-white/90">
              Industry
            </label>
            <div className="relative">
              <Select
                options={industryOptions}
                placeholder="All Industries"
                onChange={handleIndustryChange}
                defaultValue={industry}
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                <ChevronDownIcon />
              </span>
            </div>
          </div>

          {/* Location Dropdown */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-white/90">
              Location
            </label>
            <div className="relative">
              <Select
                options={cityOptions}
                placeholder="All Locations"
                onChange={handleCityChange}
                defaultValue={city}
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                <ChevronDownIcon />
              </span>
            </div>
          </div>

          {/* Clear Filters Button */}
          {(query || industry || city) && (
            <button
              onClick={handleClearFilters}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
