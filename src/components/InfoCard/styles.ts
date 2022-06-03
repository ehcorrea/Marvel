import styled, { css, DefaultTheme } from 'styled-components/native';

import { ModifierProps } from './types';

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
  small: ({ type }: ModifierProps) => css`
    height: ${type === 'comic' ? 75 : 45}px;
    width: 45px;
  `,

  large: ({ type }: ModifierProps) => css`
    height: ${type === 'comic' ? 160 : 120}px;
    width: 120px;
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

    ${wrapperModifiers[size!]()}
  `}
`;

export const Image = styled.Image<ModifierProps>`
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
