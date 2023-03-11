import PropTypes from 'prop-types';

export const exchangeType = PropTypes.shape({
  country: PropTypes.string,
  description: PropTypes.string,
  has_trading_incentive: PropTypes.bool,
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  trade_volume_24h_btc: PropTypes.number,
  trade_volume_24h_btc_normalized: PropTypes.number,
  trust_score: PropTypes.number,
  trust_score_rank: PropTypes.number,
  url: PropTypes.string,
  year_established: PropTypes.number,
});
