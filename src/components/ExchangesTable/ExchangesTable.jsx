import React from 'react';
import PropTypes from 'prop-types';

import { ExchangeRow } from 'components';
import {
  TableHead,
  TableBody,
  Col,
  SecondaryCol,
} from './ExchangesTable.styled';
import { exchangeType } from 'types';

const ExchangesTable = ({ exchanges }) => {
  return (
    <>
      <TableHead>
        <Col>Name</Col>
        <SecondaryCol>24h Volume (BTC)</SecondaryCol>
        <SecondaryCol>Trust Score (0-10)</SecondaryCol>
        <Col>Website</Col>
      </TableHead>
      <TableBody>
        {exchanges?.map(exchange => (
          <ExchangeRow
            key={exchange.id}
            image={exchange.image}
            name={exchange.name}
            trade_volume_24h_btc={exchange.trade_volume_24h_btc.toLocaleString()}
            trust_score={exchange.trust_score}
            url={exchange.url}
          />
        ))}
      </TableBody>
    </>
  );
};

ExchangesTable.propTypes = {
  exchanges: PropTypes.arrayOf(exchangeType).isRequired,
};

export default ExchangesTable;
