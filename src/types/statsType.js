import PropTypes from 'prop-types';

const coinType = PropTypes.shape({
  coinrankingUrl: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
});

export const statsType = PropTypes.shape({
  bestCoins: PropTypes.arrayOf(coinType).isRequired,
  btcDominance: PropTypes.number.isRequired,
  newestCoins: PropTypes.arrayOf(coinType).isRequired,
  referenceCurrencyRate: PropTypes.number.isRequired,
  total24hVolume: PropTypes.string.isRequired,
  totalCoins: PropTypes.number.isRequired,
  totalExchanges: PropTypes.number.isRequired,
  totalMarketCap: PropTypes.string.isRequired,
  totalMarkets: PropTypes.number.isRequired,
});
