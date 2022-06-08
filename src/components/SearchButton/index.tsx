import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { RoutesNavigation } from '../../routes/types';
import searchIcon from '../../assets/images/icon-search.png';

import * as S from './styles';

const SearchButton = () => {
  const navigation = useNavigation<RoutesNavigation>();

  const handleCallSearchView = () => {
    navigation.navigate('search');
  };

  return (
    <S.Wrapper
      accessibilityLabel="search button"
      onPress={handleCallSearchView}
    >
      <S.Icon source={searchIcon} />
      <S.Text>Search</S.Text>
    </S.Wrapper>
  );
};

export default SearchButton;
