import styled, { css, DefaultTheme } from 'styled-components/native';
import { WrapperProps } from './types';

const wrapperModifiers = {
  focused: (theme: DefaultTheme) => css`
    align-items: center;
    background-color: ${theme.colors.primary};
    border-radius: 100px;
    display: flex;
    height: 50px;
    justify-content: center;
    top: -13px;
    width: 50px;
    border: solid 3px ${theme.colors.mainBg};
  `,
};

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, focused }) => css`
    background-color: transparent;
    position: absolute;

    ${focused && wrapperModifiers.focused(theme)}
  `}
`;

export const Icon = styled.Image`
  ${({ theme }) => css`
    width: ${theme.spacings.large};
    height: ${theme.spacings.large};
  `}
`;
