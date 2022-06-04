import React from 'react';
import { ContentType } from '../../types/enum';

import * as S from './styles';
import { FavoriteButtonProps } from './types';

const FavoriteButton = ({
  contentType = ContentType.character,
  title = '',
  onPress,
}: FavoriteButtonProps) => {
  const textLabel = title || `Add Your ${contentType}`;

  const iconLabel = title
    ? `click ${title} icon`
    : `click add ${contentType} icon`;

  const iconImage = title
    ? require('../../assets/images/icon-click-favorite.png')
    : require('../../assets/images/icon-add-favorite.png');

  return (
    <S.Wrapper onPress={onPress} accessibilityLabel={textLabel}>
      <S.Title>{textLabel}</S.Title>
      <S.Icon source={iconImage} accessibilityLabel={iconLabel} />
    </S.Wrapper>
  );
};

export default FavoriteButton;
