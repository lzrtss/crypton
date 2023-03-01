import React from 'react';

import { Menu, MenuItem, NavBar } from './MainNavbar.styled';
import { StyledNavLink } from 'components/Links';

const MainNavbar = () => {
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
      </Menu>
    </NavBar>
  );
};

export default MainNavbar;
