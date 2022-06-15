import React, { useEffect, useRef } from 'react';

import { Keyboard, TextInput, TouchableOpacity } from 'react-native';

import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import theme from '../../styles/theme';

import * as S from './styles';
import { SearchInputProps } from './types';

const SearchInput = ({
  focused,
  handleChangeFocus,
  handleBackArrow,
  value,
  onChangeText,
  ...props
}: SearchInputProps) => {
  const inputRef = useRef<TextInput>(null);
  const wrapperAnimatedValues = useSharedValue({ margin: 8, borderRadius: 4 });
  const buttonAnimatedValues = useSharedValue(1);
  const inputAnimatedValues = useSharedValue(0);

  useEffect(() => {
    const changeAnimation = () => {
      if (focused) {
        wrapperAnimatedValues.value = { margin: 0, borderRadius: 0 };
        buttonAnimatedValues.value = 0;
        inputAnimatedValues.value = 1;
        inputRef.current?.focus();
      } else {
        wrapperAnimatedValues.value = { margin: 8, borderRadius: 4 };
        buttonAnimatedValues.value = 1;
        inputAnimatedValues.value = 0;
      }
    };
    changeAnimation();
  }, [
    wrapperAnimatedValues,
    buttonAnimatedValues,
    inputAnimatedValues,
    focused,
  ]);

  const wrapperAnimatedStyled = useAnimatedStyle(() => {
    return {
      margin: withTiming(wrapperAnimatedValues.value.margin, {
        duration: 300,
      }),
      borderRadius: withTiming(wrapperAnimatedValues.value.borderRadius, {
        duration: 300,
      }),
    };
  });

  const buttonAnimatedStyled = useAnimatedStyle(() => {
    return {
      opacity: withTiming(buttonAnimatedValues.value, {
        duration: 300,
      }),
    };
  });

  const inputAnimatedStyled = useAnimatedStyle(() => {
    return {
      opacity: withTiming(inputAnimatedValues.value, {
        duration: 300,
      }),
    };
  });

  useEffect(() => {
    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () =>
      handleChangeFocus(false)
    );

    return () => {
      keyboardHideListener.remove();
    };
  }, [handleChangeFocus]);

  return (
    <S.Wrapper style={wrapperAnimatedStyled} testID="animated-wrapper">
      {focused ? (
        <S.InputAnimatedView style={inputAnimatedStyled}>
          <TouchableOpacity
            onPress={handleBackArrow}
            accessibilityLabel="back button"
          >
            <S.IconArrow />
          </TouchableOpacity>

          <TextInput
            {...props}
            onChangeText={onChangeText}
            placeholder="Search"
            placeholderTextColor={theme.colors.white}
            ref={inputRef}
            style={{
              color: theme.colors.white,
              fontSize: 14,
              height: 40,
              flex: 1,
            }}
            value={value}
            accessibilityLabel="search field"
          />

          {!!value && (
            <TouchableOpacity
              onPress={() => onChangeText?.('')}
              accessibilityLabel="clear search field"
            >
              <S.IconClear />
            </TouchableOpacity>
          )}
        </S.InputAnimatedView>
      ) : (
        <S.ButtonAnimatedView style={buttonAnimatedStyled}>
          <S.FocusButton
            onPress={() => handleChangeFocus()}
            accessibilityLabel="button to focus search field"
          >
            <S.ButtonLabel>Search</S.ButtonLabel>
          </S.FocusButton>
        </S.ButtonAnimatedView>
      )}
    </S.Wrapper>
  );
};

export default SearchInput;
