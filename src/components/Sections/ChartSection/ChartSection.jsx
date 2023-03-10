import React from 'react';
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
  ErrorMessage,
  PriceChange,
  Section,
  SectionHeader,
  Select,
  Title,
  WatchListIcon,
} from 'components';
import { formatNumber } from 'utils';
import { CurrentPrice, Label, PriceInfo } from './ChartSection.styled';

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
  error,
  priceChange,
  timePeriod,
  timePeriods,
  handleTimePeriodChange,
}) => {
  const { iconUrl: coinIcon, name: coinName, price: currentPrice } = coin;

  if (error) {
    return <ErrorMessage error={error?.message} />;
  }

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

export default ChartSection;
