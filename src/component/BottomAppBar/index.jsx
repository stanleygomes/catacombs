import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import router from '../../router';

const Tab = createBottomTabNavigator();

const BottomAppBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {router != null &&
          router.map(item => <Tab.Screen name={item.name} component={item.component} />)}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomAppBar;
