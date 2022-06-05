import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.large};
  `}
`;

export const View = styled(Animated.View)`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius.medium};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    width: 100%;
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
