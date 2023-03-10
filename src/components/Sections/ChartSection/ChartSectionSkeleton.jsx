import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Section, SectionHeader } from 'components';
import { PriceInfo } from './ChartSection.styled';

const ChartSectionSkeleton = ({ height }) => {
  return (
    <Section height={height}>
      <SectionHeader>
        <Skeleton width={200} height={26} />
        <Skeleton width={100} height={26} />
      </SectionHeader>
      <PriceInfo>
        <Skeleton width={100} height={20} />
        <Skeleton width={80} height={20} />
        <Skeleton width={50} height={20} />
      </PriceInfo>
      <Skeleton height={620} />
    </Section>
  );
};

ChartSectionSkeleton.propTypes = {
  height: PropTypes.string,
};

ChartSectionSkeleton.defaultProps = {
  height: '620px',
};

export default ChartSectionSkeleton;
