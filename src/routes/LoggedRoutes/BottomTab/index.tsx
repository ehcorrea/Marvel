import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabMenuItem } from '../../../components';
import theme from '../../../styles/theme';
import HomeRoutes from '../Home';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeRoutes"
      screenOptions={{
        header: () => <></>,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: theme.colors.secondary,
          height: 50,
          borderTopWidth: 0,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="profile"
        component={() => null}
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
        name="HomeRoutes"
        component={HomeRoutes}
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
        component={() => null}
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

export default BottomTab;
