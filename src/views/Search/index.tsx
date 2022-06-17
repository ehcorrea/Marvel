import React, { useCallback, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { SearchInput } from '../../components';

import * as S from './styles';

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleChangeFocus = useCallback(
    (value?: boolean, forceValue?: boolean) => {
      Keyboard.dismiss();

      if (searchValue && !forceValue) {
        return null;
      }

      if (value !== undefined) {
        return setIsFocused(value);
      }

      return setIsFocused((prevState) => !prevState);
    },
    [searchValue]
  );

  const handleSearchChangeText = (value: string) => {
    setSearchValue(value);
  };

  return (
    <TouchableWithoutFeedback onPress={() => handleChangeFocus(false)}>
      <S.Wrapper>
        <S.SearchBox>
          <SearchInput
            focused={isFocused}
            handleChangeFocus={handleChangeFocus}
            onChangeText={handleSearchChangeText}
          />
        </S.SearchBox>
      </S.Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default Search;
