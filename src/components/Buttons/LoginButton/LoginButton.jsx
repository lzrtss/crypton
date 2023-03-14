import React from 'react';

import { useAuth } from 'hooks';
import { PrimaryButton } from 'components';
import { Wrapper } from './LoginButton.styled';

const LoginButton = () => {
  const { handleLogin } = useAuth();

  return (
    <Wrapper>
      <PrimaryButton onClick={handleLogin}>Log In</PrimaryButton>
    </Wrapper>
  );
};

export default LoginButton;
