import styled from 'styled-components/native';
import { Colors } from '../../constants/colors';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 14px 0;
`;

export const EmojiContainer = styled.View<{ $isIncome: boolean }>`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  background-color: ${(props) =>
    props.$isIncome ? Colors.incomeLight : Colors.expenseLight};
  align-items: center;
  justify-content: center;
  margin-right: 14px;
`;

export const EmojiText = styled.Text`
  font-size: 20px;
`;

export const InfoSection = styled.View`
  flex: 1;
`;

export const TitleText = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: ${Colors.textPrimary};
  margin-bottom: 4px;
`;

export const SubInfoText = styled.Text`
  font-size: 12px;
  color: ${Colors.textSecondary};
`;

export const AmountText = styled.Text<{ $isIncome: boolean }>`
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => (props.$isIncome ? Colors.income : Colors.expense)};
`;
