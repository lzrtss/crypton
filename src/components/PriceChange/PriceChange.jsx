import React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

import { isNegative } from 'utils';
import { Change } from './PriceChange.styled';

const PriceChange = ({ change = 0 }) => {
  return (
    <>
      {isNegative(change) ? (
        <Change isNegative>
          <AiOutlineArrowDown /> {change}%
        </Change>
      ) : (
        <Change>
          <AiOutlineArrowUp /> +{change}%
        </Change>
      )}
    </>
  );
};

export default PriceChange;
