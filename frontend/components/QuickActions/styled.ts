import styled from 'styled-components/native';
import { Colors } from '../../constants/colors';

export const Container = styled.View`
  flex-direction: row;
  margin: 0 16px 16px;
`;

export const ActionButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  background-color: ${Colors.card};
  border-radius: 16px;
  padding: 16px 8px 14px;
  margin: 0 4px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.06;
  shadow-radius: 6px;
  elevation: 2;
`;

export const ActionEmojiWrapper = styled.View`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const IncomeWrapper = styled(ActionEmojiWrapper)`
  background-color: ${Colors.incomeLight};
`;

export const ExpenseWrapper = styled(ActionEmojiWrapper)`
  background-color: ${Colors.expenseLight};
`;

export const TransferWrapper = styled(ActionEmojiWrapper)`
  background-color: #EEF2FF;
`;

export const StatsWrapper = styled(ActionEmojiWrapper)`
  background-color: #FFF3E8;
`;

export const ActionEmoji = styled.Text`
  font-size: 22px;
`;

export const ActionLabel = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${Colors.textSecondary};
`;
