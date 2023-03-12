import React from 'react';
import millify from 'millify';

import { Row, Section, SectionHeader, Title } from 'components';
import { Col, Label, Statistics, Value } from './CoinStatisticsSection.styled';
import { formatDate, formatNumber } from 'utils';
import { coinDetailsType } from 'types';

const CoinStatisticsSection = ({ coinDetails }) => {
  return (
    <Section>
      <SectionHeader>
        <Title>{coinDetails.name} Statistics</Title>
      </SectionHeader>
      <Statistics>
        <Col>
          <Row>
            <Label>Abbreviation:</Label>
            <Value>{coinDetails.symbol}</Value>
          </Row>
          <Row>
            <Label>Top Rank:</Label>
            <Value> #{coinDetails.rank}</Value>
          </Row>
          <Row>
            <Label>Current Price:</Label>
            <Value> ${formatNumber(coinDetails.price)}</Value>
          </Row>
          <Row>
            <Label>24h Volume:</Label>
            <Value> ${millify(coinDetails['24hVolume'])}</Value>
          </Row>
          <Row>
            <Label>Market Cap:</Label>
            <Value> ${millify(coinDetails.marketCap)}</Value>
          </Row>
          <Row>
            <Label>All-Time High:</Label>
            <Value>
              {' '}
              ${formatNumber(coinDetails.allTimeHigh.price)} (
              {formatDate(coinDetails.allTimeHigh.timestamp)})
            </Value>
          </Row>
        </Col>
        <Col>
          <Row>
            <Label>Listed At (UTC): </Label>
            <Value>{formatDate(coinDetails.listedAt)}</Value>
          </Row>
          <Row>
            <Label>Max Supply:</Label>
            <Value>
              {' '}
              {coinDetails.supply.max ? millify(coinDetails.supply.max) : '-'}
            </Value>
          </Row>
          <Row>
            <Label>Total Supply:</Label>
            <Value>
              {' '}
              {coinDetails.supply.total
                ? millify(coinDetails.supply.total)
                : '-'}
            </Value>
          </Row>
          <Row>
            <Label>Number of exchanges:</Label>
            <Value> {formatNumber(coinDetails.numberOfExchanges)}</Value>
          </Row>
          <Row>
            <Label>Number of markets:</Label>
            <Value> {formatNumber(coinDetails.numberOfMarkets)}</Value>
          </Row>
          <Row>
            <Label>Website: </Label>
            <Value>
              <a
                href={coinDetails.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {coinDetails.websiteUrl}
              </a>
            </Value>
          </Row>
        </Col>
      </Statistics>
    </Section>
  );
};

CoinStatisticsSection.propTypes = {
  coinDetails: coinDetailsType.isRequired,
};

export default CoinStatisticsSection;
