import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppTabsNavigation from '../NavigationAppTabs';
import Book from '../Book';
import SignIn from '../SignIn';
import Theme from '../Theme';
import About from '../About';
import Privacy from '../Privacy';
import Devotional from '../Devotional';
import ReadingReminder from '../ReadingReminder';
import Chapter from '../Chapter';
import ProfileInfo from '../ProfileInfo';
import AppContext from '../../provider/appContext';

const { Navigator, Screen } = createStackNavigator();

const NavigationApp = () => {
  const screens = [
    {
      name: 'AppTabsNavigation',
      component: AppTabsNavigation,
    },
    {
      name: 'ProfileInfo',
      component: ProfileInfo,
    },
    {
      name: 'Book',
      component: Book,
    },
    {
      name: 'Chapter',
      component: Chapter,
    },
    {
      name: 'Devotional',
      component: Devotional,
    },
    {
      name: 'ReadingReminder',
      component: ReadingReminder,
    },
    {
      name: 'Theme',
      component: Theme,
    },
    {
      name: 'Privacy',
      component: Privacy,
    },
    {
      name: 'About',
      component: About,
    },
  ];

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <NavigationContainer>
          <Navigator screenOptions={{ headerShown: false }}>
            {appConfig.signInChallenge === true && (
              <>
                {screens != null &&
                  screens.map(screen => (
                    <Screen key={screen.name} name={screen.name} component={screen.component} />
                  ))}
              </>
            )}
            {appConfig.signInChallenge !== true && <Screen name="SignIn" component={SignIn} />}
          </Navigator>
        </NavigationContainer>
      )}
    </AppContext.Consumer>
  );
};

export default NavigationApp;
