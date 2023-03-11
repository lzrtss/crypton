export const isInWatchList = (coinId, watchList) =>
  watchList?.find(coin => coin.uuid === coinId);
