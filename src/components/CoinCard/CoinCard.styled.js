import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 300px;
  height: 340px;
  border-radius: 2px;
  box-shadow: 0 2px 4px var(--color-dark-grey);
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 8px var(--color-dark-grey);
  }

  @media (min-width: 480px) and (max-width: 680px),
    (min-width: 780px) and (max-width: 990px),
    (min-width: 1180px) and (max-width: 1280px) {
    width: 360px;
    height: 400px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 24px;
  font-size: 18px;
`;

export const CoinTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CoinName = styled.p`
  font-weight: 600;
`;

export const CoinSymbol = styled(CoinName)`
  color: #999;
`;

export const CoinIcon = styled.img`
  display: block;
  width: ${props => props.width || '36px'};
  height: ${props => props.height || '36px'};
`;

export const Details = styled.ul`
  list-style: none;
  margin-bottom: 12px;
`;

export const Row = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--color-light-grey);

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const Label = styled.span`
  font-weight: 300;
`;

export const Value = styled.span`
  font-weight: 600;
`;

export const RowPlaceholder = styled.div`
  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--color-light-grey);
`;

export const WatchListIcon = styled.div`
  margin-left: auto;
`;
