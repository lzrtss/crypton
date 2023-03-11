import moment from 'moment';

export const formatDate = (date, dateFormat = 'MMM Do, YYYY') =>
  moment(date * 1000).format(dateFormat);
