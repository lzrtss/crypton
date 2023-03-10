import React from 'react';

import { useAuth } from 'hooks';
import { AuthenticatedUserMenu } from './AuthMenu.styled';
import { LoginButton, LogoutButton, UserName } from 'components';

const AuthMenu = () => {
  const { isAuthenticated, user } = useAuth();

  return isAuthenticated ? (
    <AuthenticatedUserMenu>
      <UserName
        name={user.given_name}
        nickname={user.nickname}
        email={user.email}
      />
      <LogoutButton />
    </AuthenticatedUserMenu>
  ) : (
    <LoginButton />
  );
};

export default AuthMenu;
