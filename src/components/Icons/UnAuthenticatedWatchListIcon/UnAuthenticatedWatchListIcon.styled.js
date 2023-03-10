import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';

export const OutlinedStarIcon = styled(AiOutlineStar)`
  color: var(--color-dark-grey);

  &:focus {
    border: none;
    outline: none;
  }
`;
