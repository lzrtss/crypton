import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 60px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  gap: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
