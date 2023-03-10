import React from 'react';

import { useAuth } from 'hooks';
import { PrimaryButton } from 'components';

const LoginButton = props => {
  const { handleLogin } = useAuth();

  return (
    <PrimaryButton onClick={handleLogin} {...props}>
      Log In
    </PrimaryButton>
  );
};

export default LoginButton;
