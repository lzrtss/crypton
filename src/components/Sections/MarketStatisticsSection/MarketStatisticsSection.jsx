import React from 'react';
import millify from 'millify';

import { Row, Section, SectionHeader, Title } from 'components';
import {
  Col,
  Label,
  Statistics,
  Value,
} from './MarketStatisticsSection.styled';
import { statsType } from 'types';

const MarketStatisticsSection = ({ stats }) => {
  return (
    <Section>
      <SectionHeader>
        <Title>Global Crypto Stats</Title>
      </SectionHeader>

      <Statistics>
        <Col>
          <Row>
            <Label>Total Coins: </Label>
            <Value>{millify(stats.totalCoins)}</Value>
          </Row>
          <Row>
            <Label>Total Exchanges: </Label>
            <Value>{stats.totalExchanges}</Value>
          </Row>
        </Col>
        <Col>
          <Row>
            <Label>Total 24h Volume: </Label>
            <Value>${millify(stats.total24hVolume)}</Value>
          </Row>
          <Row>
            <Label>Total Market Cap: </Label>
            <Value>${millify(stats.totalMarketCap, { precision: 2 })}</Value>
          </Row>
        </Col>
      </Statistics>
    </Section>
  );
};

MarketStatisticsSection.propTypes = {
  stats: statsType.isRequired,
};

export default MarketStatisticsSection;
