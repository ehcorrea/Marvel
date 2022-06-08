import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const LoggedRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="BottomTab"
      component={BottomTab}
      options={{ header: () => <></> }}
    />
  </Stack.Navigator>
);

export default LoggedRoutes;
