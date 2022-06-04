import React from 'react';
import theme from '../../styles/theme';

import * as S from './styles';
import { TabMenuItemProps } from './types';

const TabMenuItem = ({ focused, iconSource, ...props }: TabMenuItemProps) => {
  const tintColor = focused ? theme.colors.white : theme.colors.gray;

  return (
    <S.Wrapper focused={focused} {...props}>
      <S.Icon
        source={iconSource}
        style={{ tintColor }}
        accessibilityRole="image"
      />
    </S.Wrapper>
  );
};

export default TabMenuItem;
