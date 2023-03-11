import React from 'react';
import PropTypes from 'prop-types';

import {
  CoinList,
  Section,
  SectionHeader,
  ShowMoreLink,
  Title,
} from 'components';
import { coinType } from 'types';

const CoinsSection = ({ coins }) => {
  return (
    <>
      {coins?.length ? (
        <Section>
          <SectionHeader>
            <Title>Top Coins</Title>
          </SectionHeader>
          <CoinList coins={coins} />
          <ShowMoreLink to="/coins" />
        </Section>
      ) : null}
    </>
  );
};

CoinsSection.propTypes = {
  coins: PropTypes.arrayOf(coinType).isRequired,
};

export default CoinsSection;
