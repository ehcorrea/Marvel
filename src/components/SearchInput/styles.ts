import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius.large};
    border: 2px solid ${theme.colors.primary};
    display: flex;
    flex-direction: row;
    height: ${theme.spacings.huge};
    padding: 0 ${theme.spacings.large};
  `}
`;

export const Icon = styled.Image`
  ${({ theme }) => css`
    height: ${theme.spacings.xsmall};
    width: ${theme.spacings.xsmall};
  `}
`;
