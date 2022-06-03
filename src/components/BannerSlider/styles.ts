import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
`;

export const Separator = styled.View`
  ${({ theme }) => css`
    margin: 0 ${theme.spacings.xxsmall};
  `}
`;
