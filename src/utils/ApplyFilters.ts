import { DatasetItem } from "@/types/dataset";

export type Filters = {
  q?: string;
  industry?: string;
  city?: string;
  investor?: string;
  investmentType?: string;
  minAmount?: string;
  maxAmount?: string;
};

function normalize(value?: string) {
  return value?.toLowerCase().trim() ?? "";
}

function parseAmount(value?: string | null) {
  if (!value) return 0;
  const normalized = value.toString().replace(/,/g, "").trim();
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function applyFilters(
  data: DatasetItem[] = [],
  filters: Filters = {}
): DatasetItem[] {
  const q = normalize(filters.q);
  const investorQ = normalize(filters.investor);
  const minAmount = filters.minAmount ? parseAmount(filters.minAmount) : null;
  const maxAmount = filters.maxAmount ? parseAmount(filters.maxAmount) : null;

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

    // 6️⃣ Funding amount range
    if (minAmount !== null || maxAmount !== null) {
      const amount = parseAmount(item.Amount);

      if (minAmount !== null && amount < minAmount) return false;
      if (maxAmount !== null && amount > maxAmount) return false;
    }

    return true;
  });
}
