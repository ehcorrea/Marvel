import styled, { css } from 'styled-components/native';
import Banner from '../Banner';
import { BannerProps } from '../Banner/types';

export const Wrapper = styled.View`
  width: 100%;
`;

export const Separator = styled.View`
  ${({ theme }) => css`
    margin: 0 ${theme.spacings.xxsmall};
  `}
`;

export const Slider = styled.FlatList.attrs(() => ({
  renderItem: ({ item }: { item: BannerProps }) =>
    Banner({ ...item, onSlider: true }),
}))`
  padding-left: 16px;
`;
