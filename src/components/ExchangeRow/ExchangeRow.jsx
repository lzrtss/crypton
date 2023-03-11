import React from 'react';
import PropTypes from 'prop-types';

import { Row } from 'components';
import { Col, ExchangeIcon, SecondaryCol } from './ExchangeRow.styled';
import { shortenUrl } from 'utils';

const ExchangeRow = ({
  image,
  name,
  trade_volume_24h_btc,
  trust_score,
  url,
}) => {
  return (
    <Row>
      <Col>
        <ExchangeIcon src={image} alt={name} width={36} height={36} /> {name}
      </Col>
      <SecondaryCol>{trade_volume_24h_btc}</SecondaryCol>
      <SecondaryCol>{trust_score}</SecondaryCol>
      <Col>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {shortenUrl(url)}
        </a>
      </Col>
    </Row>
  );
};

ExchangeRow.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  trade_volume_24h_btc: PropTypes.string.isRequired,
  trust_score: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default ExchangeRow;
