import styled, { css } from 'styled-components/native';

export const SearchBox = styled.SafeAreaView`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`;

export const CommicSection = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    padding-vertical: ${theme.spacings.xsmall};
  `}
`;

export const CharactersSection = styled.View`
  ${({ theme }) => css`
    padding-vertical: ${theme.spacings.xsmall};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.wight.xbold};
    margin: 0 0 ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`;

export const FavouritesSection = styled.View``;
