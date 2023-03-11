import styled from 'styled-components';

export const TableHead = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 1px solid #ddd;
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const TableBody = styled.ul`
  list-style: none;
`;

export const Col = styled.div`
  width: calc(100% / 4);
`;

export const SecondaryCol = styled(Col)`
  @media (max-width: 600px) {
    display: none;
  }
`;
