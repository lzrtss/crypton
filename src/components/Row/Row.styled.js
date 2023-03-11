import styled from 'styled-components';

export const StyledRow = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-light-grey);

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
