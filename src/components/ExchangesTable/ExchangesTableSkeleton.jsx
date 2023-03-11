import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { ExchangeRowSkeleton, Row } from 'components';
import { Col } from './ExchangesTable.styled';

const ExchangesTableSkeleton = ({ numberOfItems }) => {
  return (
    <>
      <Row>
        <Col>
          <Skeleton width={100} />
        </Col>
        <Col>
          <Skeleton width={150} />
        </Col>
        <Col>
          <Skeleton width={150} />
        </Col>
        <Col>
          <Skeleton width={100} />
        </Col>
      </Row>

      {Array(numberOfItems)
        .fill(null)
        .map((_, i) => (
          <ExchangeRowSkeleton key={i} />
        ))}
    </>
  );
};

ExchangesTableSkeleton.propTypes = {
  numberOfItems: PropTypes.number,
};

ExchangesTableSkeleton.defaultProps = {
  numberOfItems: 10,
};

export default ExchangesTableSkeleton;
