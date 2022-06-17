import styled, { css, DefaultTheme } from 'styled-components/native';
import { ContentType } from '../../types/enum';

import { ImageProps, ModifierProps } from './types';

export const wrapperModifiers = {
  small: () => css`
    align-items: center;
    flex-direction: row;
  `,

  large: () => css`
    flex-direction: column;
  `,
};

export const imageModifiers = {
  small: ({ type }: ImageProps) => css`
    height: ${type === ContentType.comic ? 75 : 45}px;
    width: 45px;
  `,

  large: ({ type }: ImageProps) => css`
    height: ${type === ContentType.comic ? 135 : 90}px;
    width: 90px;
  `,
};

export const infoBoxModifiers = {
  small: (theme: DefaultTheme) => css`
    margin-left: ${theme.spacings.xxsmall};
  `,

  large: (theme: DefaultTheme) => css`
    align-items: center;
    margin-top: ${theme.spacings.xxsmall};
  `,
};

export const Wrapper = styled.TouchableOpacity<ModifierProps>`
  ${({ theme, size }) => css`
    align-items: center;
    align-self: flex-start;
    border-radius: ${theme.border.radius.xsmall};
    width: 120px;

    ${wrapperModifiers[size!]()}
  `}
`;

export const Image = styled.Image<ImageProps>`
  ${({ theme, size, type }) => css`
    border-radius: ${theme.border.radius.xsmall};

    ${imageModifiers[size!]({ type })}
  `}
`;

export const InfoBox = styled.View<ModifierProps>`
  ${({ theme, size }) => css`
    display: flex;

    ${infoBoxModifiers[size!](theme)}
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: 'Open Sans';
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.wight.xbold};
    text-align: center;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: 'Open Sans';
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.wight.normal};
  `}
`;
