# Startup India Listing Directory

A Next.js 16 listing website for exploring Indian startup funding data. Built with React 19, TypeScript, and Tailwind CSS v4.

## 🚀 Overview

This is a **cleaned, production-ready content listing website** focused on Indian startup funding data. It started as a generic admin template and has been refactored into a purposeful data explorer with:

- **Companies listing** with server-side filtering and sorting
- **Top 10 funded companies** page
- **Dynamic charts and metrics** powered by real funding data
- **Company detail pages** with rich layouts
- **Dark mode** support
- **Responsive design** (mobile + desktop)

## 📊 Dataset

The Home page is powered by `src/data/cleaned_startup_funding.json` with fields:

- `Sr_No`: Sequential ID
- `Date`: Funding date
- `StartupName`: Company name
- `Industry`: Sector
- `SubVertical`: Sub-category
- `City`: Location
- `Investors`: Investor names
- `InvestmentType`: Round type
- `Amount`: Funding amount (comma-formatted string)
- `Remarks`: Optional notes

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Charts**: ApexCharts + react-apexcharts
- **Icons**: Custom SVG icons via SVGR loader
- **Build**: Turbopack

## 📁 Project Structure

```
src/
├── app/
│   ├── (admin)/                 # Main layout with sidebar
│   │   ├── (others-pages)/
│   │   │   ├── companies/        # Companies listing + filters sidebar
│   │   │   └── top-funded/      # Top 10 funded companies
│   │   ├── layout.tsx            # Main layout wrapper
│   │   └── page.tsx             # Dashboard home
│   ├── (full-width-pages)/
│   │   └── (error-pages)/
│   │       └── error-404/       # Custom 404 page
│   ├── layout.tsx                # Root layout
│   └── not-found.tsx            # Global 404
├── components/
│   ├── common/                  # Shared components
│   │   ├── GridShape.tsx
│   │   ├── PageBreadCrumb.tsx
│   │   └── ThemeToggleButton.tsx
│   ├── companies/
│   │   └── CompanyFiltersSidebar.tsx  # Companies filters sidebar
│   ├── dashboard/                     # Home page components
│   │   ├── Description.tsx
│   │   ├── FundingChart.tsx
│   │   ├── Metrics.tsx
│   │   ├── ProjectDescription.tsx
│   │   └── StartupList.tsx
│   ├── form/
│   │   ├── Label.tsx
│   │   └── Select.tsx
│   └── ui/
│       ├── badge/
│       ├── button/
│       ├── dropdown/
│       └── modal/
├── context/
│   └── SidebarContext.tsx          # Sidebar state management
├── data/
│   └── cleaned_startup_funding.json # Main dataset
├── icons/
│   ├── index.tsx                  # Icon barrel exports
│   └── *.svg                     # Minimal set of used icons
├── layout/
│   ├── AppHeader.tsx
│   ├── Backdrop.tsx
│   └── index.ts
└── utils/
    └── ApplyFilters.ts            # Server-side filtering logic
```

## 🚦 Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with metrics, chart, and quick links |
| `/companies` | Companies listing with filters sidebar (search, industry, city, funding range, A→Z sort) |
| `/companies/[id]` | Company detail page with funding highlights and investor info |
| `/top-funded` | Top 10 companies by funding amount |
| `/error-404` | Custom 404 page |

## 🎯 Key Features

### Companies Listing
- **Server-side filtering** via URL query params
- **Filters sidebar** (on companies page)
  - String search (case-insensitive)
  - Industry dropdown
  - City dropdown
  - Funding amount range (min/max)
  - Sort: A→Z
- **Responsive Filters Sidebar**: Open on desktop, toggle on mobile
- **Table**: Shows Startup, Industry, Location, and Funding Raised

### Top Funded Page
- **Static list** of top 10 companies by Amount
- **Info card** with description
- **Clickable rows** linking to company detail

### Home Page
- **Basic metrics**: Total companies, total funding
- **Funding chart**: Yearly totals with human-readable y-axis
- **Quick links**: Companies and Top Funded cards

### Company Details Page
- **Rich layout** with badges and accent colors
- **Funding highlight** (Amount, Investors, InvestmentType)
- **Investor name pills**
- **Remarks section**
- **Breadcrumb navigation**

### UI/UX
- **Dark mode** toggle in header
- **Responsive design** across device sizes
- **Hamburger menu** on companies page to toggle filters sidebar
- **Clean typography** and consistent spacing

## 🛠️ Development

### Prerequisites
- Node.js 18.x or later (20.x+ recommended)
- npm or yarn

### Setup

```bash
# Clone
git clone <your-repo-url>
cd startup-listing-directory

# Install
npm install

# Dev
npm run dev

# Build
npm run build

# Start
npm start
```

### Build Notes
- Uses **Turbopack** for fast builds
- **SVGR loader** configured in `next.config.ts` for SVG imports
- **Tailwind CSS v4** with custom accent colors:
  - Orange: `#f89422`
  - Green: `#a4cd39`


## References
- Dataset Credits: https://www.kaggle.com/datasets/sudalairajkumar/indian-startup-funding
- Basic Dataset Preprocessing: https://colab.research.google.com/drive/1mg-8KaikmXQ6TJHQsDA4-lnTiXVLD1En?usp=sharing
- UI: https://demo.tailadmin.com/

## 📄 License

MIT License

---

Built with ❤️ for the Indian startup ecosystem.
