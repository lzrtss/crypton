import React from 'react';
import { Tooltip } from 'react-tooltip';
import millify from 'millify';

import { CoinDetailsLink, PriceChange, WatchListIcon } from 'components';
import {
  Card,
  CardHeader,
  CoinTitle,
  CoinIcon,
  CoinName,
  CoinSymbol,
  Details,
  Row,
  Label,
  Value,
} from './CoinCard.styled';
import { formatNumber } from 'utils';
import { coinType } from 'types';

const CoinCard = ({ coin }) => {
  const { uuid, price, symbol, name, iconUrl, marketCap, change } = coin;

  return (
    <CoinDetailsLink to={`/coins/${uuid}`}>
      <Card>
        <CardHeader>
          <CoinIcon width={42} height={42} src={iconUrl} alt={name} />
          <CoinTitle>
            <CoinName>{name}</CoinName>
            <CoinSymbol>{symbol}</CoinSymbol>
          </CoinTitle>
          <WatchListIcon coin={coin} />
        </CardHeader>
        <Details>
          <Row>
            <Label>Daily Change: </Label>
            <Value>
              <PriceChange change={change} />
            </Value>
          </Row>
          <Row>
            <Label>Price: </Label>
            <Value>${formatNumber(price)}</Value>
          </Row>
          <Row>
            <Label>24h Volume: </Label>
            <Value>${millify(Number(coin['24hVolume']))}</Value>
          </Row>
          <Row>
            <Label>Market Cap: </Label>
            <Value>${millify(Number(marketCap))}</Value>
          </Row>
        </Details>
      </Card>
      <Tooltip />
    </CoinDetailsLink>
  );
};

CoinCard.propTypes = {
  coin: coinType,
};

CoinCard.defaultProps = {
  coin: null,
};

export default CoinCard;
