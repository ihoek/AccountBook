import styled from 'styled-components/native';
import { Colors } from '../../constants/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px 14px;
  background-color: ${Colors.card};
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.border};
`;

export const MonthSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NavButton = styled.TouchableOpacity`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  background-color: ${Colors.primaryLight};
  align-items: center;
  justify-content: center;
`;

export const NavButtonText = styled.Text`
  font-size: 20px;
  color: ${Colors.primary};
  font-weight: 600;
  line-height: 24px;
`;

export const MonthText = styled.Text`
  font-size: 17px;
  font-weight: 700;
  color: ${Colors.textPrimary};
  min-width: 110px;
  text-align: center;
`;

export const RightSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: ${Colors.background};
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

export const IconEmoji = styled.Text`
  font-size: 16px;
`;
