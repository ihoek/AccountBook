import styled from 'styled-components/native';
import { Colors } from '../../constants/colors';

export const Container = styled.View`
  margin: 16px 16px 12px;
  border-radius: 22px;
  background-color: ${Colors.primary};
  padding: 24px;
  shadow-color: ${Colors.primary};
  shadow-offset: 0px 8px;
  shadow-opacity: 0.35;
  shadow-radius: 16px;
  elevation: 10;
`;

export const BalanceLabel = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.3px;
  margin-bottom: 8px;
`;

export const BalanceAmount = styled.Text`
  font-size: 34px;
  font-weight: 800;
  color: ${Colors.white};
  letter-spacing: -1px;
  margin-bottom: 22px;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
`;

export const SubCardsRow = styled.View`
  flex-direction: row;
`;

export const SubCard = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  padding: 14px;
`;

export const IncomeSubCard = styled(SubCard)`
  margin-right: 8px;
`;

export const ExpenseSubCard = styled(SubCard)`
  margin-left: 8px;
`;

export const SubCardLabel = styled.Text`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 8px;
`;

export const SubCardRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SubCardArrow = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
  margin-right: 4px;
`;

export const SubCardAmount = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: ${Colors.white};
`;
