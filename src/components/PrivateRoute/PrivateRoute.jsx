import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from 'hooks';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default PrivateRoute;
