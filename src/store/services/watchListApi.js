import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

export const watchListApi = createApi({
  reducerPath: 'watchListApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://6310bca136e6a2a04ef65cd2.mockapi.io/api/v1',
  }),
  tagTypes: ['WatchList'],
  endpoints: builder => ({
    getWatchList: builder.query({
      query: ({ userId }) => ({
        url: `/watchlist?filter=${userId}`,
        method: 'GET',
      }),
      providesTags: ['WatchList'],
    }),
    addCoinToWatchList: builder.mutation({
      query: ({ coin, userId }) => ({
        url: '/watchlist',
        data: {
          userId,
          ...coin,
        },
        method: 'POST',
      }),
      invalidatesTags: ['WatchList'],
    }),
    removeCoinFromWatchList: builder.mutation({
      query: coinId => ({
        url: `/watchlist/${coinId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['WatchList'],
    }),
  }),
});

export const {
  useGetWatchListQuery,
  useAddCoinToWatchListMutation,
  useRemoveCoinFromWatchListMutation,
} = watchListApi;
