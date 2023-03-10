import PropTypes from 'prop-types';

export const coinHistoryType = {
  price: PropTypes.string,
  timestamp: PropTypes.number,
};

export const dataSetsType = {
  label: PropTypes.string,
  data: PropTypes.number,
  fill: PropTypes.bool,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
};

export const chartDataType = PropTypes.shape({
  labels: PropTypes.arrayOf(coinHistoryType),
  datasets: PropTypes.arrayOf(dataSetsType),
});
