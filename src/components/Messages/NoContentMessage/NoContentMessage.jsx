import React from 'react';

import { Message } from '../Messages.styled';

const NoContentMessage = props => {
  return <Message {...props}>Sorry, there is nothing to show... 😔</Message>;
};

export default NoContentMessage;
