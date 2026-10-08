export type CurrencyCode = "USD" | "EUR" | "GBP" | "CAD" | "AUD" | "BDT";

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rateAgainstUSD: number;
}

export type SortOrder = "asc" | "desc";

export interface DateRange {
  from?: Date;
  to?: Date;
}
