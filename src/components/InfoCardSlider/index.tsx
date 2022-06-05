import React from 'react';
import { FlatList } from 'react-native';

import InfoCard from '../InfoCard';

import * as S from './styles';
import { InfoCardSliderProps } from './types';

const InfoCardSlider = ({ items }: InfoCardSliderProps) => {
  return (
    <S.Wrapper>
      <FlatList
        style={{ paddingHorizontal: 16 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={items}
        renderItem={({ item }) => <InfoCard {...item} />}
        ItemSeparatorComponent={S.Separator}
      />
    </S.Wrapper>
  );
};

export default InfoCardSlider;
