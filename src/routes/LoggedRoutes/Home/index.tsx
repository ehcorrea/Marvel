import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeView from '../../../views/Home';
import { Search } from '../../../views';

const Stack = createStackNavigator();

const HomeRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomeView}
        options={{ header: () => <></> }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{ header: () => <></>, presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
