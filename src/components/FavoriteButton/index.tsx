import React from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { ContentType } from '../../types/enum';

import * as S from './styles';
import { FavoriteButtonProps } from './types';

const FavoriteButton = ({
  contentType = ContentType.character,
  title = '',
  onPress,
  withAnimation,
}: FavoriteButtonProps) => {
  const sharedValue = useSharedValue(0);
  const textLabel = title || `Add Your ${contentType}`;

  const iconLabel = title
    ? `click ${title} icon`
    : `click add ${contentType} icon`;

  const iconImage = title
    ? require('../../assets/images/icon-click-favorite.png')
    : require('../../assets/images/icon-add-favorite.png');

  const handlePress = () => {
    if (withAnimation) {
      sharedValue.value = withSequence(withTiming(100), withTiming(0));
      return setTimeout(() => onPress?.(), 500);
    }
    onPress?.();
  };

  const animatedStyles = useAnimatedStyle(() => {
    return { left: sharedValue.value };
  });

  return (
    <S.Wrapper onPress={handlePress} accessibilityLabel={textLabel}>
      <S.View style={animatedStyles}>
        <S.Title>{textLabel}</S.Title>
        <S.Icon source={iconImage} accessibilityLabel={iconLabel} />
      </S.View>
    </S.Wrapper>
  );
};

export default FavoriteButton;
