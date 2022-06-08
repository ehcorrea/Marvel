import React, { useMemo } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { useGetCharatersQuery, useGetComicsQuery } from '../../service/marvel';
import { convertUrlImage } from '../../util/helpers';
import Layout from '../../styles/Layout';

import {
  FavoriteButton,
  BannerSlider,
  InfoCardSlider,
  SearchButton,
} from '../../components';

import { ContentType } from '../../types/enum';
import { BannerProps } from '../../components/Banner/types';
import { FavoriteButtonProps } from '../../components/FavoriteButton/types';
import { InfoCardProps } from '../../components/InfoCard/types';

import * as S from './styles';

const FAVORITES_MOCK: FavoriteButtonProps[] = [
  {},
  {
    contentType: ContentType.character,
    title: 'Second',
  },
  {
    contentType: ContentType.character,
    title: 'A-Bomb',
  },
  {
    contentType: ContentType.character,
    title: 'Spider-Man',
  },
  {
    contentType: ContentType.character,
    title: 'A-Bomb',
  },
  {
    contentType: ContentType.character,
    title: 'Spider-Man',
  },
  {
    contentType: ContentType.character,
    title: 'Last',
  },
];

const Home = () => {
  const { data: characterData } = useGetCharatersQuery({});
  const { data: comicData } = useGetComicsQuery({});

  const charactersDataToBannerSlider = useMemo<BannerProps[]>(
    () =>
      characterData?.data.results.map(({ thumbnail, ...character }) => {
        const image = `${thumbnail.path}.${thumbnail.extension}`;
        return {
          image: convertUrlImage(image),
          name: character.name,
          type: ContentType['character'],
        };
      }) || [],
    [characterData]
  );

  const comicDataToCardInfoSlider = useMemo<InfoCardProps[]>(
    () =>
      comicData?.data.results.map(({ thumbnail, ...character }) => {
        const image = `${thumbnail.path}.${thumbnail.extension}`;
        return {
          image: convertUrlImage(image),
          name: character.title,
          type: ContentType['comic'],
          size: 'large',
        };
      }) || [],
    [comicData]
  );

  return (
    <Layout>
      <View style={{ flex: 1 }}>
        <S.SearchBox>
          <SearchButton />
        </S.SearchBox>
        <S.CommicSection>
          <BannerSlider items={charactersDataToBannerSlider} />
        </S.CommicSection>

        <S.CharactersSection>
          <S.Title>Commics</S.Title>
          <InfoCardSlider items={comicDataToCardInfoSlider} />
        </S.CharactersSection>

        <S.FavouritesSection style={{ flex: 1 }}>
          <S.Title>Favourites Characters</S.Title>
          <FlatList
            contentContainerStyle={{ marginLeft: 20, paddingBottom: 20 }}
            data={FAVORITES_MOCK}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            renderItem={({ item }) => (
              <FavoriteButton {...item} withAnimation />
            )}
            showsVerticalScrollIndicator={false}
          />
        </S.FavouritesSection>
      </View>
    </Layout>
  );
};

export default Home;
