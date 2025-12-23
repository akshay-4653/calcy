
export interface CalculationResult {
  principal: number;
  interest: number;
  totalAmount: number;
  rate: number;
  time: number;
}

export interface FinancialInsight {
  tip: string;
  loading: boolean;
  error: string | null;
}
