import styled, { css } from 'styled-components/native';
import { Animated } from 'react-native';

export const Wrapper = styled(Animated.View)`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.wight.bold};
  `}
`;
