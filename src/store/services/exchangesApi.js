import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

export const exchangesApi = createApi({
  reducerPath: 'exchangesApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://coingecko.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_EXCHANGES_API_KEY,
      'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
    },
  }),
  tagTypes: ['Exchange'],
  endpoints: builder => ({
    getExchanges: builder.query({
      query: () => ({
        url: '/exchanges',
        method: 'GET',
      }),
      providesTags: ['Exchange'],
    }),
  }),
});

export const { useGetExchangesQuery } = exchangesApi;
