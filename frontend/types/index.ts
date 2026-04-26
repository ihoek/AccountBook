export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: string;
  emoji: string;
}

export interface MonthSummary {
  income: number;
  expense: number;
  balance: number;
}
