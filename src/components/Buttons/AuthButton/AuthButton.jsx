import React from 'react';

import { useAuth } from 'hooks';
import { LoginButton, LogoutButton } from 'components';

const AuthButton = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthButton;
