import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabMenuItem } from '../../../components';
import theme from '../../../styles/theme';
import iconProfile from '../../../assets/images/icon-profile.png';
import iconHome from '../../../assets/images/icon-home.png';
import iconFavorite from '../../../assets/images/icon-favorite.png';

import HomeRoutes from '../Home';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeRoutes"
      screenOptions={{
        header: () => <></>,
        tabBarStyle: {
          backgroundColor: theme.colors.secondary,
          height: 50,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="profile"
        component={HomeRoutes}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <TabMenuItem
              focused={focused}
              iconSource={iconProfile}
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
              iconSource={iconHome}
              accessibilityLabel="home tab button"
            />
          ),
        }}
      />

      <Tab.Screen
        name="favorites"
        component={HomeRoutes}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <TabMenuItem
              focused={focused}
              iconSource={iconFavorite}
              accessibilityLabel="favorites tab  button"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
