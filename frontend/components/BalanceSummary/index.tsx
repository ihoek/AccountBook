import React from 'react';
import { formatCurrency } from '../../utils/format';
import {
  Container,
  BalanceLabel,
  BalanceAmount,
  Divider,
  SubCardsRow,
  IncomeSubCard,
  ExpenseSubCard,
  SubCardLabel,
  SubCardRow,
  SubCardArrow,
  SubCardAmount,
} from './styled';

interface Props {
  balance: number;
  income: number;
  expense: number;
}

export default function BalanceSummary({ balance, income, expense }: Props) {
  const isNegative = balance < 0;

  return (
    <Container>
      <BalanceLabel>이번 달 잔액</BalanceLabel>
      <BalanceAmount>
        {isNegative ? '-' : ''}{formatCurrency(balance)}
      </BalanceAmount>

      <Divider />

      <SubCardsRow>
        <IncomeSubCard>
          <SubCardLabel>수입</SubCardLabel>
          <SubCardRow>
            <SubCardArrow>↑</SubCardArrow>
            <SubCardAmount>{formatCurrency(income)}</SubCardAmount>
          </SubCardRow>
        </IncomeSubCard>

        <ExpenseSubCard>
          <SubCardLabel>지출</SubCardLabel>
          <SubCardRow>
            <SubCardArrow>↓</SubCardArrow>
            <SubCardAmount>{formatCurrency(expense)}</SubCardAmount>
          </SubCardRow>
        </ExpenseSubCard>
      </SubCardsRow>
    </Container>
  );
}
