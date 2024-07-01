import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Card from '../models/ICard';

export const charactersApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    fetchAllCharacters: builder.query<{ info: string; results: Card[] }, string>({
      query: (name: string) => ({
        url: '/character',
        params: {
          name,
        },
      }),
    }),
  }),
});