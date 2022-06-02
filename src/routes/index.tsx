import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import NoLoggedRoutes from './NoLoggedRoutes';
import LoggedRoutes from './LoggedRoutes';
import { Alert } from 'react-native';

const Routes = () => {
  const { hasUser } = useSelector((state: RootState) => state.authReducer);

  useEffect(() => {
    Alert.alert('hasUser', String(hasUser));
  }, [hasUser]);

  if (!hasUser) {
    return <NoLoggedRoutes />;
  }

  return <LoggedRoutes />;
};

export default Routes;
