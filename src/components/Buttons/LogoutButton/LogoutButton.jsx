import React from 'react';

import { useAuth } from 'hooks';
import { PrimaryButton } from '../Buttons.styled';

const LogoutButton = () => {
  const { handleLogout } = useAuth();

  return <PrimaryButton onClick={handleLogout}>Log Out</PrimaryButton>;
};

export default LogoutButton;
