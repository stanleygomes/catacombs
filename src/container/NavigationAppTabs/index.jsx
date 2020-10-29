import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Text from '../../component/Text';
import Home from '../Home';
import NavigationProfile from '../NavigationProfile';
import style from './style';

const { Navigator, Screen } = createBottomTabNavigator();

const NavigationAppTabs = () => {
  const tabBarOptions = {
    style: style.tabs,
    tabStyle: style.tab,
    iconStyle: style.icon,
    labelStyle: style.label,
    inactiveBackgroundColor: style.inactiveBackgroundColor.backgroundColor,
    activeBackgroundColor: style.activeBackgroundColor.backgroundColor,
    inactiveTintColor: style.inactiveTintColor.backgroundColor,
    activeTintColor: style.activeTintColor.backgroundColor,
  };

  const renderTab = (textKey, icon) => {
    return {
      tabBarLabel: ({ color }) => <Text textKey={textKey} style={{ color }} />,
      tabBarIcon: ({ color, size }) => <AntDesign name={icon} color={color} size={size} />,
    };
  };

  const screens = [
    {
      name: 'Home',
      component: Home,
      options: renderTab('home', 'home'),
    },
    {
      name: 'Read',
      component: Home,
      options: renderTab('read', 'book'),
    },
    {
      name: 'Quiz',
      component: Home,
      options: renderTab('quiz', 'questioncircleo'),
    },
    {
      name: 'NavigationProfile',
      component: NavigationProfile,
      options: renderTab('profile', 'user'),
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
