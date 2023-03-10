import styled from 'styled-components';

export const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Col = styled.div`
  width: 50%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 300;
`;

export const Value = styled(Label)`
  font-weight: 600;
`;
