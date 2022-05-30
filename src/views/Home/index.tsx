import React, { useMemo, useState } from 'react';
import { SearchInput, BannerSlider } from '../../components';
import { BannerProps } from '../../components/Banner/types';
import { useDebounce } from '../../hooks';
import { useGetCharatersQuery } from '../../service/marvel';
import Layout from '../../styles/Layout';

import * as S from './styles';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, 1000);
  const { data } = useGetCharatersQuery({ nameStartsWith: debouncedValue });

  const charactersDataToBannerSlider = useMemo<BannerProps[]>(
    () =>
      data?.data.results.map(({ thumbnail, ...character }) => {
        const image = `${thumbnail.path}.${thumbnail.extension}`;
        return {
          image,
          name: character.name,
          type: 'character',
        };
      }) || [],
    [data]
  );

  return (
    <Layout>
      <S.SearchBox>
        <SearchInput onChangeText={setSearchValue} />
      </S.SearchBox>
      <BannerSlider items={charactersDataToBannerSlider} />
    </Layout>
  );
};

export default Home;
