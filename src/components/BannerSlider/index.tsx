import React from 'react';
import { FlatList } from 'react-native';

import Banner from '../Banner';
import * as S from './styles';
import { BannerSliderProps } from './types';

const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <S.Wrapper>
      <FlatList
        style={{ paddingLeft: 16 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={items}
        renderItem={({ item }) => <Banner {...item} onSlider />}
        ItemSeparatorComponent={S.Separator}
      />
    </S.Wrapper>
  );
};

export default BannerSlider;
