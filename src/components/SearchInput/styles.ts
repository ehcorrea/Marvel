import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';

import iconArrow from '../../assets/images/icon-arrow.png';
import iconClear from '../../assets/images/icon-close.png';

export const Wrapper = styled(Animated.View)`
  ${({ theme }) => css`
    border: solid 2px ${theme.colors.primary};
    flex: 1;
    max-height: 55px;
    background-color: ${theme.colors.secondary};
  `}
`;

export const ButtonAnimatedView = styled(Animated.View)`
  flex: 1;
`;

export const FocusButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.wight.bold};
  `}
`;

export const InputAnimatedView = styled(Animated.View)`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 0 ${theme.spacings.xxsmall};
  `}
`;

export const IconArrow = styled.Image.attrs(() => ({ source: iconArrow }))`
  ${({ theme }) => css`
    width: ${theme.spacings.large};
    height: ${theme.spacings.large};
    margin: 0 ${theme.spacings.xxsmall};
  `}
`;

export const IconClear = styled.Image.attrs(() => ({ source: iconClear }))`
  ${({ theme }) => css`
    width: ${theme.spacings.large};
    height: ${theme.spacings.large};
    margin: 0 ${theme.spacings.xxsmall};
  `}
`;
