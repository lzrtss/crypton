import styled from 'styled-components';
import { FaBitcoin } from 'react-icons/fa';

import { StyledLink } from 'components/Links';

export const Link = styled(StyledLink)`
  font-size: 24px;

  &:hover {
    color: var(--color-dark-grey);
  }
`;

export const BitcoinIcon = styled(FaBitcoin)`
  color: var(--color-golden);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
