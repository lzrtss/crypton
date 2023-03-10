import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';

export const useAuth = () => {
  const location = useLocation();

  const { isAuthenticated, isLoading, user, loginWithRedirect, logout } =
    useAuth0();

  const userId = user?.sub;

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: location?.pathname,
      },
    });
  };

  const handleLogout = () => {
    logout({
      logoutParams: { returnTo: process.env.REACT_APP_AUTH0_CALLBACK_URL },
    });
  };

  return {
    isAuthenticated,
    isLoading,
    user,
    userId,
    handleLogin,
    handleLogout,
  };
};
