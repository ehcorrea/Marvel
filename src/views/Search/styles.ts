import styled, { css } from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.mainBg};
  `}
`;

export const SearchBox = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.black};
    height: 55px;
  `}
`;
