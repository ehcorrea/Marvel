import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../../views/Home';
import theme from '../../../styles/theme';
import { TabMenuItem } from '../../../components';

const Tab = createBottomTabNavigator();

const TabHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        header: () => <></>,
        tabBarStyle: {
          position: 'relative',
          backgroundColor: theme.colors.secondary,
          height: 60,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="profile"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <TabMenuItem
              focused={focused}
              iconSource={require('../../../assets/images/icon-profile.png')}
              accessibilityLabel="profile tab button"
            />
          ),
        }}
      />
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <TabMenuItem
              focused={focused}
              iconSource={require('../../../assets/images/icon-home.png')}
              accessibilityLabel="home tab button"
            />
          ),
        }}
      />
      <Tab.Screen
        name="favorites"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <TabMenuItem
              focused={focused}
              iconSource={require('../../../assets/images/icon-favorite.png')}
              accessibilityLabel="favorites tab  button"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabHome;
