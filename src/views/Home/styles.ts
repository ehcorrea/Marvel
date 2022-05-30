import styled, { css } from 'styled-components/native';

export const SearchBox = styled.SafeAreaView`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} ${theme.spacings.xxsmall};
  `}
`;
