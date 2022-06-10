import React, { useCallback, useMemo, useRef, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';

import iconSearch from '../../assets/images/icon-search.png';
import iconClear from '../../assets/images/icon-close.png';

import * as S from './styles';
import { SearchInputProps } from './types';

const SearchInput = ({ onChangeText, ...props }: SearchInputProps) => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<TextInput>(null);

  const handleFocusInput = useCallback(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  const handleClear = useCallback(() => {
    setValue('');
  }, []);

  const handleChangeText = (inputValue: string) => {
    setValue(inputValue);
    onChangeText?.(inputValue);
  };

  const renderIcon = useMemo(() => {
    const hasValue = !!value;
    const icon = hasValue ? iconClear : iconSearch;

    const touchableProps = {
      onPress: hasValue ? handleClear : handleFocusInput,
      accessibilityLabel: hasValue ? 'clear icon' : 'search icon',
    };

    return (
      <TouchableOpacity {...touchableProps}>
        <S.Icon source={icon} />
      </TouchableOpacity>
    );
  }, [handleClear, handleFocusInput, value]);

  return (
    <S.Wrapper>
      <TextInput
        {...props}
        accessibilityLabel="search input"
        onChangeText={handleChangeText}
        placeholder="Search"
        placeholderTextColor="white"
        ref={inputRef}
        style={{ flex: 1, color: 'white' }}
        value={value}
      />
      {renderIcon}
    </S.Wrapper>
  );
};

export default SearchInput;
