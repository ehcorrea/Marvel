import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

import { WrapperProps } from './types';

const wrapperModifiers = {
  onSlider: () => css`
    width: ${Dimensions.get('screen').width * 0.9};
  `,
};

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  ${({ theme, onSlider }) => css`
    background-color: ${theme.colors.mainBg};
    border-radius: ${theme.border.radius.medium};
    height: 200px;
    position: relative;

    ${onSlider && wrapperModifiers.onSlider()}
  `}
`;

export const Background = styled.Image`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.medium};
    flex: 1;
  `}
`;

export const InfosBox = styled.View`
  ${({ theme }) => css`
    padding: ${theme.border.radius.medium} ${theme.border.radius.large};
  `}
  background-color: #181a3e82;
  height: 100%;
  justify-content: space-between;
  position: absolute;
  width: 100%;
`;

export const TypeName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: 'Open Sans';
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.wight.xbold};
    text-transform: capitalize;
  `}
`;

export const ItemName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: 'Open Sans';
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.wight.xbold};
    text-transform: capitalize;
  `}
`;
