import styled from 'styled-components';

export const ExchangeIcon = styled.img`
  margin-right: 8px;
  width: ${props => props.width || '36px'};
  height: ${props => props.height || '36px'};
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% / 4);
`;

export const SecondaryCol = styled(Col)`
  @media (max-width: 600px) {
    display: none;
  }
`;
