import React from 'react';

import { useAuth } from 'hooks';
import { StyledNavLink } from 'components';
import { Menu, MenuItem, NavBar } from './MainNavbar.styled';

const MainNavbar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavBar>
      <Menu>
        <MenuItem>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/coins">Coins</StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/exchanges">Exchanges</StyledNavLink>
        </MenuItem>
        {isAuthenticated ? (
          <MenuItem>
            <StyledNavLink to="watchlist">Watchlist</StyledNavLink>
          </MenuItem>
        ) : null}
      </Menu>
    </NavBar>
  );
};

export default MainNavbar;
