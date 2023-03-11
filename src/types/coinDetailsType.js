import PropTypes from 'prop-types';

const allTimeHighType = PropTypes.shape({
  price: PropTypes.string,
  timestamp: PropTypes.number,
});

const linkType = PropTypes.shape({
  name: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string,
});

const supplyType = PropTypes.shape({
  circulating: PropTypes.string,
  confirmed: PropTypes.bool,
  max: PropTypes.string,
  supplyAt: PropTypes.number,
  total: PropTypes.string,
});

export const coinDetailsType = PropTypes.shape({
  '24hVolume': PropTypes.string.isRequired,
  allTimeHigh: allTimeHighType,
  btcPrice: PropTypes.string,
  change: PropTypes.string.isRequired,
  coinrankingUrl: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
  fullyDilutedMarketCap: PropTypes.string,
  hasContent: PropTypes.bool,
  iconUrl: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(linkType),
  listedAt: PropTypes.number,
  lowVolume: PropTypes.bool,
  marketCap: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  notices: PropTypes.oneOf([null]),
  numberOfExchanges: PropTypes.number,
  numberOfMarkets: PropTypes.number,
  price: PropTypes.string.isRequired,
  priceAt: PropTypes.number,
  rank: PropTypes.number.isRequired,
  sparkline: PropTypes.arrayOf(PropTypes.string),
  supply: supplyType,
  symbol: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  tier: PropTypes.number,
  uuid: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string,
});
