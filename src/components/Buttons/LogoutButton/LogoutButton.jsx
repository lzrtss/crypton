import React from 'react';

import { useAuth } from 'hooks';
import { PrimaryButton } from '../Buttons.styled';

const LogoutButton = props => {
  const { handleLogout } = useAuth();

  return (
    <PrimaryButton onClick={handleLogout} {...props}>
      Log Out
    </PrimaryButton>
  );
};

export default LogoutButton;
