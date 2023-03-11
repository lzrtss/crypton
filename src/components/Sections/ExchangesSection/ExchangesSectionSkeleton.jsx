import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { ExchangesTableSkeleton, Section, SectionHeader } from 'components';

const ExchangesSectionSkeleton = ({ preview }) => {
  const numberOfItems = preview ? 4 : 10;

  return (
    <Section>
      <SectionHeader>
        <Skeleton width={150} height={26} />
        <Skeleton width={preview ? 85 : 380} height={preview ? 20 : 32} />
      </SectionHeader>
      <ExchangesTableSkeleton numberOfItems={numberOfItems} />
    </Section>
  );
};

ExchangesSectionSkeleton.propTypes = {
  preview: PropTypes.bool,
};

ExchangesSectionSkeleton.defaultProps = {
  preview: false,
};

export default ExchangesSectionSkeleton;
