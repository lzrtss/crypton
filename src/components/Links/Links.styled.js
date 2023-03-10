import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-dark-grey);

  &:hover {
    color: var(--color-teal);
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-dark-grey);

  &:hover,
  &.active {
    color: var(--color-teal);
    border-bottom: 2px solid var(--color-teal);
  }
`;
