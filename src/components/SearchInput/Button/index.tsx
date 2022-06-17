import React, { useContext, useEffect, useRef } from 'react';

import { Animated } from 'react-native';

import { SearchInputContext } from '../context';

import * as S from './styles';

const Button = () => {
  const { focused, handleChangeFocus } = useContext(SearchInputContext);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!focused) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 450,
        useNativeDriver: false,
      }).start();
    }
  }, [animatedValue, focused]);

  return (
    <S.Wrapper
      style={{ opacity: animatedValue }}
      testID="animated-wrapper-button"
    >
      <S.Button
        onPress={() => handleChangeFocus()}
        accessibilityLabel="focus to search field"
      >
        <S.Label>Search</S.Label>
      </S.Button>
    </S.Wrapper>
  );
};

export default Button;
