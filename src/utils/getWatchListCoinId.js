export const getWatchListCoinId = (coinId, watchList) => {
  const selectedCoin = watchList?.find(coin => coin.uuid === coinId);
  return selectedCoin?.id;
};
