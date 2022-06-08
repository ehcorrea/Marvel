import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import { RoutesNavigation } from '../../../routes/types';

const searchIcon = require('../../assets/images/icon-search.png');

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
