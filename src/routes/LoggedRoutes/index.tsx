import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabHome from './Home';

const Stack = createStackNavigator();

const LoggedRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="tabHome"
      component={TabHome}
      options={{ header: () => <></> }}
    />
  </Stack.Navigator>
);

export default LoggedRoutes;
