import styled, { css } from 'styled-components/native';

import { TextInput, Animated } from 'react-native';

import iconArrow from '../../../assets/images/icon-arrow.png';
import iconClear from '../../../assets/images/icon-close.png';

export const InputAnimatedView = styled(Animated.View)`
  ${({ theme }) => css`
    align-items: center;
    flex-direction: row;
    flex: 1;
    padding: 0 ${theme.spacings.xxsmall};
  `}
`;

export const IconArrow = styled.Image.attrs(() => ({ source: iconArrow }))`
  ${({ theme }) => css`
    height: ${theme.spacings.large};
    margin: 0 ${theme.spacings.xxsmall};
    width: ${theme.spacings.large};
  `}
`;

export const IconClear = styled.Image.attrs(() => ({ source: iconClear }))`
  ${({ theme }) => css`
    height: ${theme.spacings.large};
    margin: 0 ${theme.spacings.xxsmall};
    width: ${theme.spacings.large};
  `}
`;

export const Input = styled(TextInput)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    flex: 1;
    font-size: ${theme.font.sizes.small};
    height: ${theme.spacings.huge};
  `}
`;
