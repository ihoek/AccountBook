import React from 'react';
import {
  Container,
  MonthSection,
  NavButton,
  NavButtonText,
  MonthText,
  RightSection,
  IconButton,
  IconEmoji,
} from './styled';

interface Props {
  month: string;
  onPrev: () => void;
  onNext: () => void;
}

export default function Header({ month, onPrev, onNext }: Props) {
  return (
    <Container>
      <MonthSection>
        <NavButton onPress={onPrev} activeOpacity={0.7}>
          <NavButtonText>‹</NavButtonText>
        </NavButton>
        <MonthText>{month}</MonthText>
        <NavButton onPress={onNext} activeOpacity={0.7}>
          <NavButtonText>›</NavButtonText>
        </NavButton>
      </MonthSection>

      <RightSection>
        <IconButton activeOpacity={0.7}>
          <IconEmoji>🔔</IconEmoji>
        </IconButton>
        <IconButton activeOpacity={0.7}>
          <IconEmoji>⚙️</IconEmoji>
        </IconButton>
      </RightSection>
    </Container>
  );
}
