export interface YearResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}

export interface UserInputArgs {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export function calculateInvestmentResults(args: UserInputArgs): YearResult[];

export const formatter: Intl.NumberFormat;
