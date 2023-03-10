import PropTypes from 'prop-types';

export const coinType = PropTypes.shape({
  '24hVolume': PropTypes.string,
  btcPrice: PropTypes.string,
  change: PropTypes.string,
  coinrankingUrl: PropTypes.string,
  color: PropTypes.string,
  iconUrl: PropTypes.string,
  listedAt: PropTypes.number,
  lowVolume: PropTypes.bool,
  marketCap: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  rank: PropTypes.number,
  sparkline: PropTypes.arrayOf(PropTypes.string),
  symbol: PropTypes.string,
  tier: PropTypes.number,
  uuid: PropTypes.string,
});
