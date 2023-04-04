import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px var(--color-dark-grey);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }
`;
