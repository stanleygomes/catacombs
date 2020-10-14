import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppTabsNavigation from '../NavigationAppTabs';
import SignIn from '../SignIn';
import localStorage from '../../service/localStorage';

const { Navigator, Screen } = createStackNavigator();

const NavigationApp = () => {
  const [isFirstAccess, setIsFirstAccess] = useState(true);
  const [loading, setLoading] = useState(true);

  const firstAccess = () => {
    localStorage
      .get('config')
      .then(data => {
        if (data != null) {
          setIsFirstAccess(false);
        }

        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        setIsFirstAccess(true);
        console.log(e);
      });
  };

  useEffect(() => {
    firstAccess();
  }, []);

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
      {loading === false && (
        <NavigationContainer>
          <Navigator screenOptions={{ headerShown: false }}>
            {/* {isFirstAccess === false && <Screen name="SignIn" component={SignIn} />} */}
            {screens != null &&
              screens.map(screen => (
                <Screen key={screen.name} name={screen.name} component={screen.component} />
              ))}
          </Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default NavigationApp;
