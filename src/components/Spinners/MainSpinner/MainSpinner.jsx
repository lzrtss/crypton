import React from 'react';

import { Spinner } from 'components';
import { Wrapper } from './MainSpinner.styled';

const MainSpinner = props => {
  return (
    <Wrapper>
      <Spinner {...props} />
    </Wrapper>
  );
};

export default MainSpinner;
