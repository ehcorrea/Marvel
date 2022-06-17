import styled, { css } from 'styled-components/native';

import InfoCard from '../InfoCard';
import { InfoCardProps } from '../InfoCard/types';

export const Wrapper = styled.View`
  width: 100%;
`;

export const Separator = styled.View`
  ${({ theme }) => css`
    margin: 0 ${theme.spacings.xxsmall};
  `}
`;

export const Slider = styled.FlatList.attrs(() => ({
  renderItem: ({ item }: { item: InfoCardProps }) => InfoCard(item),
}))`
  padding-left: 16px;
`;
