import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../../views/Home';

const Tab = createBottomTabNavigator();

const TabHome = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <></>,
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabHome;
