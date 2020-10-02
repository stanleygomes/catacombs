import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../container/SignIn';
import Main from '../container/Main';

const AppRouter = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Main" component={Main} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
