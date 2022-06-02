import styled, { css } from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius.small};
    display: flex;
    flex-direction: row;
    padding-right: ${theme.spacings.large};
  `}
`;

export const ButtonContent = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.wight.xbold};
  `}
`;

export const IconWrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-bottom-left-radius: ${theme.border.radius.small};
    border-top-left-radius: ${theme.border.radius.small};
    margin-right: ${theme.spacings.large};
    padding: ${theme.spacings.large};
  `}
`;
