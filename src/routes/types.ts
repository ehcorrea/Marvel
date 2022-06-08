import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type StackParamList = {
  login: undefined;
  TabBottom: undefined;
  home: undefined;
  search: undefined;
};

type TabParamList = {
  HomeRoutes: undefined;
};

export type RoutesNavigation = CompositeNavigationProp<
  StackNavigationProp<StackParamList>,
  BottomTabNavigationProp<TabParamList>
>;
