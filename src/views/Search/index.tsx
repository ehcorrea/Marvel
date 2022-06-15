import React, { useCallback, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';

import { SearchInput } from '../../components';

import * as S from './styles';

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleChangeFocus = useCallback(
    (value?: boolean) => {
      Keyboard.dismiss();

      if (searchValue) {
        return null;
      }

      if (value !== undefined) {
        return setIsFocused(value);
      }

      return setIsFocused((prevState) => !prevState);
    },
    [searchValue]
  );

  const handleResetSearchInput = () => {
    setIsFocused(false);
    setSearchValue('');
  };

  const handleSearchChangeText = (value: string) => {
    setSearchValue(value);
  };

  return (
    <S.Wrapper>
      <TouchableWithoutFeedback onPress={() => handleChangeFocus(false)}>
        <S.SearchBox>
          <SearchInput
            value={searchValue}
            handleBackArrow={handleResetSearchInput}
            focused={isFocused}
            handleChangeFocus={handleChangeFocus}
            onChangeText={handleSearchChangeText}
          />
        </S.SearchBox>
      </TouchableWithoutFeedback>
    </S.Wrapper>
  );
};

export default Search;
