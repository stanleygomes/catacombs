import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppTabsNavigation from '../NavigationAppTabs';
import SignIn from '../SignIn';

const { Navigator, Screen } = createStackNavigator();

const NavigationApp = () => {
  const screens = [
    {
      name: 'SignIn',
      component: SignIn,
    },
    {
      name: 'AppTabsNavigation',
      component: AppTabsNavigation,
    },
  ];

  return (
    <>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          {/* {isFirstAccess === false && <Screen name="SignIn" component={SignIn} />} */}
          {screens != null &&
            screens.map(screen => (
              <Screen key={screen.name} name={screen.name} component={screen.component} />
            ))}
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default NavigationApp;
