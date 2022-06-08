import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius.medium};
    border: solid 2px ${theme.colors.secondary};
    flex-direction: row;
    padding: ${theme.spacings.xxsmall};
    width: 100%;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.wight.bold};
  `}
`;

export const Icon = styled.Image`
  ${({ theme }) => css`
    height: ${theme.spacings.xsmall};
    margin-right: ${theme.spacings.xxsmall};
    width: ${theme.spacings.xsmall};
  `}
`;
