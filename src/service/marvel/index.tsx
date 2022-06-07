import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { REACT_APP_MARVEL_PUBLIC_KEY } from '@env';

import {
  generateQueryParamsStringFromObject,
  generateHash,
} from '../../util/helpers';

import { Requests, Characters, Comics } from './types';

const { hash, timestamp } = generateHash();

export const marvelApi = createApi({
  reducerPath: 'marvelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gateway.marvel.com/v1/public',
  }),
  endpoints: (builder) => ({
    getCharaters: builder.query<
      Requests.MarvelResponse<Characters.CharactersData>,
      Requests.MarvelDefaultReques<Characters.CharactersRequest>
    >({
      query: (filter) => {
        const queryParams = generateQueryParamsStringFromObject(filter);
        return `/characters?ts=${timestamp}${queryParams}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${hash}`;
      },
    }),
    getComics: builder.query<
      Requests.MarvelResponse<Comics.ComicsData>,
      Requests.MarvelDefaultReques<Comics.ComicsRequest>
    >({
      query: (filter) => {
        const queryParams = generateQueryParamsStringFromObject(filter);
        return `/comics?ts=${timestamp}${queryParams}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${hash}`;
      },
    }),
  }),
});

export const { useGetCharatersQuery, useGetComicsQuery } = marvelApi;
