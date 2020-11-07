import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../About';
import Profile from '../Profile';
import Privacy from '../Privacy';
import Theme from '../Theme';
import ReadingReminder from '../ReadingReminder';

const { Navigator, Screen } = createStackNavigator();

const NavigationProfile = () => {
  const screens = [
    {
      name: 'Profile',
      component: Profile,
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
    <Navigator screenOptions={{ headerShown: false }}>
      {screens != null &&
        screens.map(screen => (
          <Screen key={screen.name} name={screen.name} component={screen.component} />
        ))}
    </Navigator>
  );
};

export default NavigationProfile;
