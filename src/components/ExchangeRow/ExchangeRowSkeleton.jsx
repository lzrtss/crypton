import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Row } from 'components';
import { Col } from './ExchangeRow.styled';

const ExchangeRowSkeleton = ({ preview }) => {
  return (
    <Row>
      <Col>
        <Skeleton circle width={36} height={36} />
        <Skeleton width={150} />
      </Col>
      <Col>
        <Skeleton width={100} />
      </Col>
      <Col>
        <Skeleton width={50} />
      </Col>
      <Col>
        <Skeleton width={150} />
      </Col>
    </Row>
  );
};

ExchangeRowSkeleton.propTypes = {
  preview: PropTypes.bool,
};

ExchangeRowSkeleton.defaultProps = {
  preview: false,
};

export default ExchangeRowSkeleton;
