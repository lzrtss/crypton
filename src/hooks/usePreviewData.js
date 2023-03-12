import { useAuth0 } from '@auth0/auth0-react';

import {
  useGetCoinsQuery,
  useGetCoinStatsQuery,
  useGetExchangesQuery,
  useGetWatchListQuery,
} from 'store/services';

export const usePreviewData = (limit = 4) => {
  const { user } = useAuth0();
  const userId = user?.sub;

  const { isLoading: isLoadingWatchList } = useGetWatchListQuery({ userId });

  const {
    data: coinsData,
    error: coinsError,
    isLoading: isLoadingCoins,
  } = useGetCoinsQuery({ limit });

  const {
    data: statsData,
    isLoading: isLoadingStats,
    error: statsError,
  } = useGetCoinStatsQuery();

  const {
    data: exchangesData,
    error: exchangesError,
    isLoading: isLoadingExchanges,
  } = useGetExchangesQuery();

  const isLoading =
    isLoadingWatchList ||
    isLoadingCoins ||
    isLoadingStats ||
    isLoadingExchanges;

  const error = coinsError || statsError || exchangesError;
  const coins = coinsData?.data?.coins;
  const stats = statsData?.data;

  return {
    coins,
    error,
    exchanges: exchangesData?.slice(0, limit),
    isLoading,
    stats,
  };
};
