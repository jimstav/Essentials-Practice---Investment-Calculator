export interface YearResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}

export function calculateInvestmentResults(args: {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}): YearResult[];

export const formatter: Intl.NumberFormat;
