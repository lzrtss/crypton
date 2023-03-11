import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

import {
  PriceChange,
  Section,
  SectionHeader,
  Select,
  Title,
  WatchListIcon,
} from 'components';
import { formatNumber } from 'utils';
import { CurrentPrice, Label, PriceInfo } from './ChartSection.styled';
import { chartDataType, coinType } from 'types';

ChartJS.register(
  CategoryScale,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
);

const ChartSection = ({
  chartData,
  coin,
  priceChange,
  timePeriod,
  timePeriods,
  handleTimePeriodChange,
}) => {
  const { iconUrl: coinIcon, name: coinName, price: currentPrice } = coin;

  return (
    <Section>
      <SectionHeader>
        <Title>
          <img width={40} height={40} src={coinIcon} alt={coinName} />{' '}
          {coinName} Price Chart
          <WatchListIcon coin={coin} />
        </Title>

        <Select
          options={timePeriods}
          defaultValue={timePeriod}
          handleChange={handleTimePeriodChange}
        />
      </SectionHeader>
      <PriceInfo>
        <Label>Current Price:</Label>
        <CurrentPrice>${formatNumber(currentPrice)}</CurrentPrice>
        <PriceChange change={priceChange} />
      </PriceInfo>

      <Chart type="line" data={chartData} />
    </Section>
  );
};

ChartSection.propTypes = {
  chartData: chartDataType.isRequired,
  coin: coinType.isRequired,
  priceChange: PropTypes.string.isRequired,
  timePeriod: PropTypes.string.isRequired,
  timePeriods: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleTimePeriodChange: PropTypes.func.isRequired,
};

export default ChartSection;
