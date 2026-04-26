import React, { useState } from 'react';
import { Transaction } from '../../types';
import { formatMonth } from '../../utils/format';
import Header from '../../components/Header';
import BalanceSummary from '../../components/BalanceSummary';
import QuickActions from '../../components/QuickActions';
import RecentTransactions from '../../components/RecentTransactions';
import { SafeContainer, ScrollContent } from './styled';

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    title: '스타벅스',
    amount: 6500,
    type: 'expense',
    category: '식비',
    date: '2026-04-26',
    emoji: '☕',
  },
  {
    id: '2',
    title: '4월 급여',
    amount: 3200000,
    type: 'income',
    category: '급여',
    date: '2026-04-25',
    emoji: '💰',
  },
  {
    id: '3',
    title: '지하철',
    amount: 1400,
    type: 'expense',
    category: '교통',
    date: '2026-04-25',
    emoji: '🚌',
  },
  {
    id: '4',
    title: '마트',
    amount: 45000,
    type: 'expense',
    category: '식비',
    date: '2026-04-24',
    emoji: '🛒',
  },
  {
    id: '5',
    title: '넷플릭스',
    amount: 17000,
    type: 'expense',
    category: '문화',
    date: '2026-04-23',
    emoji: '🎬',
  },
];

export default function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1));

  const income = MOCK_TRANSACTIONS.filter((t) => t.type === 'income').reduce(
    (sum, t) => sum + t.amount,
    0,
  );
  const expense = MOCK_TRANSACTIONS.filter((t) => t.type === 'expense').reduce(
    (sum, t) => sum + t.amount,
    0,
  );
  const balance = income - expense;

  const handlePrevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  };

  return (
    <SafeContainer>
      <Header
        month={formatMonth(currentDate)}
        onPrev={handlePrevMonth}
        onNext={handleNextMonth}
      />
      <ScrollContent
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <BalanceSummary balance={balance} income={income} expense={expense} />
        <QuickActions />
        <RecentTransactions transactions={MOCK_TRANSACTIONS} />
      </ScrollContent>
    </SafeContainer>
  );
}
