import styled from 'styled-components/native';
import { Colors } from '../../constants/colors';

export const Container = styled.View`
  margin: 0 16px 30px;
  background-color: ${Colors.card};
  border-radius: 20px;
  padding: 18px 16px 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.06;
  shadow-radius: 8px;
  elevation: 3;
`;

export const SectionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${Colors.textPrimary};
`;

export const SeeAllButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const SeeAllText = styled.Text`
  font-size: 13px;
  color: ${Colors.primary};
  font-weight: 500;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: ${Colors.border};
`;

export const EmptyContainer = styled.View`
  align-items: center;
  padding: 32px 0;
`;

export const EmptyEmoji = styled.Text`
  font-size: 36px;
  margin-bottom: 10px;
`;

export const EmptyText = styled.Text`
  font-size: 14px;
  color: ${Colors.textSecondary};
`;
