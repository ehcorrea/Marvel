import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  generateQueryParamsStringFromObject,
  generateHash,
} from '../../util/helpers';
import { MarvelResponse, CharactersData, CharactersRequest } from './types';

const { hash, timestamp, PUBLIC_KEY } = generateHash();

export const marvelApi = createApi({
  reducerPath: 'marvelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gateway.marvel.com/v1/public',
  }),
  endpoints: (builder) => ({
    getCharaters: builder.query<
      MarvelResponse<CharactersData>,
      CharactersRequest
    >({
      query: (filter) => {
        const queryParams = generateQueryParamsStringFromObject(filter);
        return `/characters?ts=${timestamp}${queryParams}&apikey=${PUBLIC_KEY}&hash=${hash}`;
      },
    }),
  }),
});

export const { useGetCharatersQuery } = marvelApi;
