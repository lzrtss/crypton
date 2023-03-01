import styled from 'styled-components';

export const AuthenticatedUserMenu = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: end;
  }
`;
