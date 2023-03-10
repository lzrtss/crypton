import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from './axiosBaseQuery';

export const coinsApi = createApi({
  reducerPath: 'coinsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://coinranking1.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_COINS_API_KEY,
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  }),
  tagTypes: ['Coin'],
  endpoints: builder => ({
    getCoins: builder.query({
      query: ({ limit = 20, search = '' }) => ({
        url: '/coins',
        method: 'GET',
        params: {
          limit,
          search,
        },
      }),
      providesTags: ['Coin'],
    }),
    getCoinById: builder.query({
      query: coinId => ({
        url: `/coin/${coinId}`,
        method: 'GET',
      }),
      providesTags: ['Coin'],
    }),
    getCoinHistory: builder.query({
      query: ({ coinId, timePeriod }) => ({
        url: `/coin/${coinId}/history`,
        method: 'GET',
        params: { timePeriod },
      }),
      providesTags: ['Coin'],
    }),
    getCoinStats: builder.query({
      query: () => ({
        url: '/stats',
        method: 'GET',
      }),
      providesTags: ['Coin'],
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetCoinByIdQuery,
  useGetCoinHistoryQuery,
  useGetCoinStatsQuery,
} = coinsApi;
