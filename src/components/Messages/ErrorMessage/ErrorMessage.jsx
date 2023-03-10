import React from 'react';

import { Message } from '../Messages.styled';

const ErrorMessage = props => {
  return <Message {...props}>Something went wrong... 😔</Message>;
};

export default ErrorMessage;
