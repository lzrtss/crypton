import styled from 'styled-components';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export const Icon = styled.div`
  width: 28px;
  height: 28px;
  margin-left: auto;
`;

export const FilledStarIcon = styled(AiFillStar)`
  color: var(--color-golden);

  &:focus {
    border: none;
    outline: none;
  }
`;

export const OutlinedStarIcon = styled(AiOutlineStar)`
  color: var(--color-dark-grey);

  &:focus {
    border: none;
    outline: none;
  }
`;
