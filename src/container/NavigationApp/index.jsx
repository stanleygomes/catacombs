import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppTabsNavigation from '../NavigationAppTabs';
import SignIn from '../SignIn';
import AppContext from '../../provider/appContext';

const { Navigator, Screen } = createStackNavigator();

const NavigationApp = () => {
  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <NavigationContainer>
          <Navigator screenOptions={{ headerShown: false }}>
            {appConfig.signInChallenge === true && (
              <Screen name="AppTabsNavigation" component={AppTabsNavigation} />
            )}
            {appConfig.signInChallenge !== true && <Screen name="SignIn" component={SignIn} />}
          </Navigator>
        </NavigationContainer>
      )}
    </AppContext.Consumer>
  );
};

export default NavigationApp;
