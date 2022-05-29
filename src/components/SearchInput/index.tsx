import React, { useCallback, useRef } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';

import * as S from './styles';
import { SearchInputProps } from './types';

const SearchInput = ({ ...props }: SearchInputProps) => {
  const inputRef = useRef<TextInput>(null);

  const handleFocusInput = useCallback(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <S.Wrapper>
      <TextInput
        {...props}
        placeholder="Search"
        accessibilityLabel="search input"
        style={{ flex: 1, color: 'white' }}
        placeholderTextColor="white"
        ref={inputRef}
      />
      <TouchableOpacity
        onPress={handleFocusInput}
        accessibilityLabel="search icon"
      >
        <S.IconSearch source={require('../../assets/icon-search.png')} />
      </TouchableOpacity>
    </S.Wrapper>
  );
};

export default SearchInput;
