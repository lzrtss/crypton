import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Row, Section, SectionHeader } from 'components';
import { Col, Statistics } from './CoinStatisticsSection.styled';

const CoinStatisticsSectionSkeleton = ({ preview }) => {
  const numberOfRows = preview ? 2 : 6;

  return (
    <Section>
      <SectionHeader>
        <Skeleton width={250} height={26} />
      </SectionHeader>
      <Statistics>
        <Col>
          {Array(numberOfRows)
            .fill(null)
            .map((_, i) => (
              <Row key={i}>
                <Skeleton width={150} />
                <Skeleton width={100} />
              </Row>
            ))}
        </Col>
        <Col>
          {Array(numberOfRows)
            .fill(null)
            .map((_, i) => (
              <Row key={i}>
                <Skeleton width={150} height={20} />
                <Skeleton width={100} height={20} />
              </Row>
            ))}
        </Col>
      </Statistics>
    </Section>
  );
};

CoinStatisticsSectionSkeleton.propTypes = {
  preview: PropTypes.bool,
};

CoinStatisticsSectionSkeleton.defaultProps = {
  preview: false,
};

export default CoinStatisticsSectionSkeleton;
