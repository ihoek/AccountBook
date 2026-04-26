import React from 'react';
import { Transaction } from '../../types';
import { formatCurrency, formatDate } from '../../utils/format';
import {
  Container,
  EmojiContainer,
  EmojiText,
  InfoSection,
  TitleText,
  SubInfoText,
  AmountText,
} from './styled';

interface Props {
  transaction: Transaction;
}

export default function TransactionItem({ transaction }: Props) {
  const isIncome = transaction.type === 'income';

  return (
    <Container activeOpacity={0.7}>
      <EmojiContainer $isIncome={isIncome}>
        <EmojiText>{transaction.emoji}</EmojiText>
      </EmojiContainer>

      <InfoSection>
        <TitleText>{transaction.title}</TitleText>
        <SubInfoText>
          {transaction.category} · {formatDate(transaction.date)}
        </SubInfoText>
      </InfoSection>

      <AmountText $isIncome={isIncome}>
        {isIncome ? '+' : '-'}
        {formatCurrency(transaction.amount)}
      </AmountText>
    </Container>
  );
}
