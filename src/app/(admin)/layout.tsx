"use client";

import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import Backdrop from "@/layout/Backdrop";
import CompanyFiltersSidebar from "@/components/companies/CompanyFiltersSidebar";
import { usePathname } from "next/navigation";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobileOpen } = useSidebar();
  const pathname = usePathname();
  
  // Check if we're on the companies listing page
  const isCompaniesPage = pathname === "/companies";


  // Calculate the filter margin
  const FilterMargin = isCompaniesPage
    ? isMobileOpen
      ? "lg:ml-[290px]"
      : "lg:ml-0"
    : "";

  return (
    <div className="min-h-screen xl:flex">
      {/* Backdrop */}
      <Backdrop />
      
      {/* Filter Sidebar - Only on companies listing page */}
      {isCompaniesPage && <CompanyFiltersSidebar />}
      
      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${FilterMargin}`}
      >
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
      </div>
    </div>
  );
}
