import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../About';
import Profile from '../Profile';
import Privacy from '../Privacy';
import Theme from '../Theme';

const { Navigator, Screen } = createStackNavigator();

const NavigationProfile = () => {
  const screens = [
    {
      name: 'Profile',
      component: Profile,
    },
    {
      name: 'About',
      component: About,
    },
    {
      name: 'Privacy',
      component: Privacy,
    },
    {
      name: 'Theme',
      component: Theme,
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
