import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../../views';

const Stack = createStackNavigator();

const NoLoggedRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="home"
      component={Login}
      options={{ header: () => <></> }}
    />
  </Stack.Navigator>
);

export default NoLoggedRoutes;
