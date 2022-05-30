import React from 'react';

import * as S from './styles';
import { BannerProps } from './types';

const Banner = ({ image, name, type, ...props }: BannerProps) => (
  <S.Wrapper accessibilityLabel={`${name} banner`} {...props}>
    <S.Background source={{ uri: image }} />
    <S.InfosBox>
      <S.TypeName>{type}</S.TypeName>
      <S.ItemName>{name}</S.ItemName>
    </S.InfosBox>
  </S.Wrapper>
);

export default Banner;
