import React from 'react';

import { useAuth } from 'hooks';
import { PrimaryButton } from 'components';

const LoginButton = () => {
  const { handleLogin } = useAuth();

  return <PrimaryButton onClick={handleLogin}>Log In</PrimaryButton>;
};

export default LoginButton;
