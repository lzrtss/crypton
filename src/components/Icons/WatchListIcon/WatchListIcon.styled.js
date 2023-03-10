import styled from 'styled-components';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export const Icon = styled.div`
  width: 28px;
  height: 28px;
  margin-left: auto;
  cursor: pointer;
`;

export const FilledStarIcon = styled(AiFillStar)`
  color: goldenrod;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const OutlinedStarIcon = styled(AiOutlineStar)`
  color: #333;

  &:focus {
    border: none;
    outline: none;
  }
`;
