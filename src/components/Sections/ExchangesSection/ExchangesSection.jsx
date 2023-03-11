import React from 'react';
import PropTypes from 'prop-types';

import {
  ExchangesTable,
  Section,
  SectionHeader,
  ShowMoreLink,
  Title,
} from 'components';
import { exchangeType } from 'types';

const ExchangesSection = ({ exchanges }) => {
  return (
    <>
      {exchanges?.length ? (
        <Section>
          <SectionHeader>
            <Title>Top Exchanges</Title>
          </SectionHeader>
          <ExchangesTable exchanges={exchanges} />
          <ShowMoreLink to="/exchanges" />
        </Section>
      ) : null}
    </>
  );
};

ExchangesSection.propTypes = {
  exchanges: PropTypes.arrayOf(exchangeType).isRequired,
};

export default ExchangesSection;
