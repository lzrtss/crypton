import styled from 'styled-components';

export const Change = styled.span`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: ${props =>
    props.isNegative ? 'var(--color-red)' : 'var(--color-teal)'};
`;
