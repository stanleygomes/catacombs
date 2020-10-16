import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationProfile from '../NavigationProfile';
import Text from '../../component/Text';
import Home from '../Home';
import style from './style';

const { Navigator, Screen } = createBottomTabNavigator();

const NavigationAppTabs = () => {
  const tabBarOptions = {
    style: style.tabs,
    tabStyle: style.tab,
    iconStyle: style.icon,
    labelStyle: style.label,
    inactiveBackgroundColor: '#fafafc',
    activeBackgroundColor: '#ebebf5',
    inactiveTintColor: '#c1bbcc',
    activeTintColor: '#32264b',
  };

  const screens = [
    {
      name: 'Home',
      component: Home,
      options: {
        tabBarLabel: () => <Text textKey="home" />,
        tabBarIcon: ({ color, size }) => <Ionicons name="ios-easel" color={color} size={size} />,
      },
    },
    {
      name: 'NavigationProfile',
      component: NavigationProfile,
      options: {
        tabBarLabel: () => <Text textKey="profile" />,
        tabBarIcon: ({ color, size }) => <Ionicons name="ios-heart" color={color} size={size} />,
      },
    },
  ];

  return (
    <Navigator tabBarOptions={tabBarOptions}>
      {screens != null &&
        screens.map(screen => (
          <Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
    </Navigator>
  );
};

export default NavigationAppTabs;
