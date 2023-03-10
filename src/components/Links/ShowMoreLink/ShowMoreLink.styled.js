import styled from 'styled-components';

import { StyledLink } from '../Links.styled';

export const LinkWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  text-align: center;
  color: var(--color-teal);
`;

export const Link = styled(StyledLink)`
  color: teal;
  border-bottom: 1px solid teal;
`;
