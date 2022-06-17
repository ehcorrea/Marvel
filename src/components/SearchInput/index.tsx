import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import Button from './Button';

import { SearchInputContext } from './context';
import Input from './Input';
import * as S from './styles';
import { SearchInputProps } from './types';

const SearchInput = ({
  focused,
  handleChangeFocus,
  ...props
}: SearchInputProps) => {
  const wrapperAnimatedValues = useRef(
    new Animated.ValueXY({ x: 8, y: 4 })
  ).current;

  useEffect(() => {
    if (focused) {
      Animated.timing(wrapperAnimatedValues, {
        toValue: { x: 0, y: 0 },
        duration: 450,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(wrapperAnimatedValues, {
        toValue: { x: 8, y: 4 },
        duration: 450,
        useNativeDriver: false,
      }).start();
    }
  }, [wrapperAnimatedValues, focused]);

  return (
    <S.Wrapper
      testID="animated-wrapper"
      style={{
        margin: wrapperAnimatedValues.x,
        borderRadius: wrapperAnimatedValues.y,
      }}
    >
      <SearchInputContext.Provider
        value={{ focused, handleChangeFocus, ...props }}
      >
        {focused ? <Input /> : <Button />}
      </SearchInputContext.Provider>
    </S.Wrapper>
  );
};

export default SearchInput;
