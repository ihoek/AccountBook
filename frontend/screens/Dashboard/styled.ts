import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../constants/colors';

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${Colors.card};
`;

export const ScrollContent = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.background};
`;
