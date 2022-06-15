import React from 'react';

import * as S from './styles';
import { BannerProps } from './types';

const Banner = ({ image, name, type, ...props }: BannerProps) => (
  <S.Wrapper {...props}>
    <S.Background
      source={{ uri: image }}
      accessibilityLabel={`${name} banner`}
    />
    <S.InfosBox>
      <S.TypeName>{type}</S.TypeName>
      <S.ItemName>{name}</S.ItemName>
    </S.InfosBox>
  </S.Wrapper>
);

export default Banner;
