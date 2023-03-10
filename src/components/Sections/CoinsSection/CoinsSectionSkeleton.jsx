import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

import { CoinListSkeleton, Section, SectionHeader } from 'components';
import 'react-loading-skeleton/dist/skeleton.css';

const CoinsSectionSkeleton = ({ preview }) => {
  return (
    <Section>
      <SectionHeader>
        <Skeleton width={150} height={26} />
        <Skeleton width={preview ? 85 : 380} height={preview ? 20 : 32} />
      </SectionHeader>
      <CoinListSkeleton numberOfItems={preview ? 4 : 20} />
    </Section>
  );
};

CoinsSectionSkeleton.propTypes = {
  preview: PropTypes.bool,
};

CoinsSectionSkeleton.defaultProps = {
  preview: false,
};

export default CoinsSectionSkeleton;
