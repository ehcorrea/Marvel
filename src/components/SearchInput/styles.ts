import styled, { css } from 'styled-components/native';

import { Animated } from 'react-native';

export const Wrapper = styled(Animated.View)`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    border: solid 2px ${theme.colors.primary};
    flex: 1;
    max-height: 55px;
  `}
`;
