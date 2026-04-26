import React from 'react';
import {
  Container,
  ActionButton,
  IncomeWrapper,
  ExpenseWrapper,
  TransferWrapper,
  StatsWrapper,
  ActionEmoji,
  ActionLabel,
} from './styled';

const ACTIONS = [
  { emoji: '💰', label: '수입', Wrapper: IncomeWrapper },
  { emoji: '💸', label: '지출', Wrapper: ExpenseWrapper },
  { emoji: '🔄', label: '이체', Wrapper: TransferWrapper },
  { emoji: '📊', label: '통계', Wrapper: StatsWrapper },
];

export default function QuickActions() {
  return (
    <Container>
      {ACTIONS.map((action) => {
        const { Wrapper } = action;
        return (
          <ActionButton key={action.label} activeOpacity={0.75}>
            <Wrapper>
              <ActionEmoji>{action.emoji}</ActionEmoji>
            </Wrapper>
            <ActionLabel>{action.label}</ActionLabel>
          </ActionButton>
        );
      })}
    </Container>
  );
}
