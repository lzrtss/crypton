import styled from 'styled-components';

export const CurrentPrice = styled.span`
  font-weight: 600;
`;

export const Label = styled.span`
  font-weight: 300;
`;

export const PriceInfo = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

export const PriceChange = styled(CurrentPrice)`
  display: flex;
  align-items: center;
  color: ${props =>
    props.isNegative ? 'var(--color-red)' : 'var(--color-red)'};
`;
