import React from 'react';

import * as S from './styles';
import { BannerSliderProps } from './types';

const BannerSlider = ({ data }: BannerSliderProps) => {
  return (
    <S.Wrapper>
      <S.Slider
        accessibilityLabel="banner slider"
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal
        ItemSeparatorComponent={S.Separator}
      />
    </S.Wrapper>
  );
};

export default BannerSlider;
