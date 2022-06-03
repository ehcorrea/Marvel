import React from 'react';

import * as S from './styles';
import { InfoCardProps } from './types';

const InfoCard = ({
  name,
  image,
  subTitle,
  size = 'small',
  type = 'character',
  ...props
}: InfoCardProps) => {
  const renderSubtitle = () =>
    !!subTitle && <S.SubTitle>{subTitle}</S.SubTitle>;

  return (
    <S.Wrapper accessibilityLabel={`${name} card`} size={size} {...props}>
      <S.Image
        accessibilityLabel={`${name} image`}
        size={size}
        source={{ uri: image }}
        type={type}
      />
      <S.InfoBox size={size}>
        <S.Title>{name}</S.Title>
        {renderSubtitle()}
      </S.InfoBox>
    </S.Wrapper>
  );
};

export default InfoCard;
