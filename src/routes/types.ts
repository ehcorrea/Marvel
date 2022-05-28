import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type StackParamList = {
  Login: undefined;
};

type TabParamList = {
  Home: undefined;
};

export type ProfileScreenNavigation = CompositeNavigationProp<
  StackNavigationProp<StackParamList>,
  BottomTabNavigationProp<TabParamList>
>;
