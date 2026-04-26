import React from 'react';
import { Transaction } from '../../types';
import TransactionItem from '../TransactionItem';
import {
  Container,
  SectionHeader,
  SectionTitle,
  SeeAllButton,
  SeeAllText,
  Divider,
  EmptyContainer,
  EmptyEmoji,
  EmptyText,
} from './styled';

interface Props {
  transactions: Transaction[];
}

export default function RecentTransactions({ transactions }: Props) {
  return (
    <Container>
      <SectionHeader>
        <SectionTitle>최근 내역</SectionTitle>
        <SeeAllButton activeOpacity={0.7}>
          <SeeAllText>전체보기 ›</SeeAllText>
        </SeeAllButton>
      </SectionHeader>

      {transactions.length === 0 ? (
        <EmptyContainer>
          <EmptyEmoji>📭</EmptyEmoji>
          <EmptyText>거래 내역이 없습니다</EmptyText>
        </EmptyContainer>
      ) : (
        transactions.map((transaction, index) => (
          <React.Fragment key={transaction.id}>
            <TransactionItem transaction={transaction} />
            {index < transactions.length - 1 && <Divider />}
          </React.Fragment>
        ))
      )}
    </Container>
  );
}
