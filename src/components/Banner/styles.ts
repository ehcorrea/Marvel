import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    border-radius: ${theme.border.radius.medium};
    flex: 1;
    margin: 10px;
    max-height: 200px;
    position: relative;
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
    flex: 1;
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
