import { DatasetItem } from "@/types/dataset";

export type Filters = {
  q?: string;
  industry?: string;
  city?: string;
  investor?: string;
  investmentType?: string;
};

function normalize(value?: string) {
  return value?.toLowerCase().trim() ?? "";
}

export function applyFilters(
  data: DatasetItem[] = [],
  filters: Filters = {}
): DatasetItem[] {
  const q = normalize(filters.q);
  const investorQ = normalize(filters.investor);

  return data.filter(item => {
    // 1️⃣ Substring search (startup name + related fields)
    if (q) {
      const searchable = [
        item.StartupName,
        item.Industry,
        item.SubVertical,
        item.City,
        item.Investors,
        item.InvestmentType,
      ]
        .map(normalize)
        .join(" ");

      if (!searchable.includes(q)) return false;
    }

    // 2️⃣ Industry dropdown
    if (filters.industry && item.Industry !== filters.industry) {
      return false;
    }

    // 3️⃣ City dropdown
    if (filters.city && item.City !== filters.city) {
      return false;
    }

    // 4️⃣ Investor substring match
    if (investorQ && !normalize(item.Investors).includes(investorQ)) {
      return false;
    }

    // 5️⃣ Investment type dropdown
    if (
      filters.investmentType &&
      item.InvestmentType !== filters.investmentType
    ) {
      return false;
    }

    return true;
  });
}
