import React from 'react';

import * as S from './styles';
import { InfoCardSliderProps } from './types';

const InfoCardSlider = ({ data }: InfoCardSliderProps) => {
  return (
    <S.Wrapper>
      <S.Slider
        accessibilityLabel="info card slider"
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        ItemSeparatorComponent={S.Separator}
      />
    </S.Wrapper>
  );
};

export default InfoCardSlider;
