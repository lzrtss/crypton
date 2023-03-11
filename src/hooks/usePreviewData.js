import {
  useGetCoinsQuery,
  useGetCoinStatsQuery,
  useGetExchangesQuery,
} from 'store/services';

export const usePreviewData = (limit = 4) => {
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
    data: exchanges,
    error: exchangesError,
    isLoading: isLoadingExchanges,
  } = useGetExchangesQuery(limit);

  const isLoading = isLoadingCoins || isLoadingStats || isLoadingExchanges;

  const error = coinsError || statsError || exchangesError;
  const coins = coinsData?.data?.coins;
  const stats = statsData?.data;

  return {
    coins,
    error,
    exchanges,
    isLoading,
    stats,
  };
};
