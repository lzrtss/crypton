import PropTypes from 'prop-types';

export const dataSetsType = PropTypes.shape({
  label: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  fill: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
});

export const chartDataType = PropTypes.shape({
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  datasets: PropTypes.arrayOf(dataSetsType).isRequired,
});
