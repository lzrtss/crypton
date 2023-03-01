import styled from 'styled-components';

export const NavBar = styled.nav`
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
`;
