import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import NoLoggedRoutes from './NoLoggedRoutes';
import LoggedRoutes from './LoggedRoutes';

const Routes = () => {
  const { hasUser } = useSelector((state: RootState) => state.authReducer);

  if (!hasUser) {
    return <NoLoggedRoutes />;
  }

  return <LoggedRoutes />;
};

export default Routes;
