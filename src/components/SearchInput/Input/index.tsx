import React, { useContext, useEffect, useRef, useState } from 'react';
import { Animated, Keyboard, TextInput, TouchableOpacity } from 'react-native';

import theme from '../../../styles/theme';
import { SearchInputContext } from '../context';

import * as S from './styles';

const Input = () => {
  const { focused, handleChangeFocus, onChangeText } =
    useContext(SearchInputContext);
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef<TextInput>(null);
  const animatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (focused) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 450,
        useNativeDriver: false,
      }).start();
      inputRef.current?.focus();
    }
  }, [animatedValue, focused]);

  useEffect(() => {
    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () =>
      handleChangeFocus(false)
    );

    return () => {
      keyboardHideListener.remove();
    };
  }, [handleChangeFocus]);

  const handleChangeText = (text: string) => {
    setInputValue(text);
    onChangeText?.(text);
  };

  const handleClearText = () => {
    handleChangeText('');
  };

  const handleBack = () => {
    handleChangeFocus(false, true);
    handleClearText();
  };

  return (
    <S.InputAnimatedView
      style={{ opacity: animatedValue }}
      testID="animated-wrapper-input"
    >
      <TouchableOpacity onPress={handleBack} accessibilityLabel="back button">
        <S.IconArrow />
      </TouchableOpacity>

      <S.Input
        onChangeText={handleChangeText}
        placeholder="Search"
        placeholderTextColor={theme.colors.white}
        ref={inputRef}
        value={inputValue}
        accessibilityLabel="search field"
      />

      {!!inputValue && (
        <TouchableOpacity
          onPress={handleClearText}
          accessibilityLabel="clear search field button"
        >
          <S.IconClear />
        </TouchableOpacity>
      )}
    </S.InputAnimatedView>
  );
};

export default Input;
