import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.secondary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius.medium};
    margin: 10px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.wight.xbold};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Icon = styled.Image``;
