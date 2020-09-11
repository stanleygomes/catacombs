import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tabs from '../../router/tabs';

const Tab = createBottomTabNavigator();

const BottomAppBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {tabs != null && tabs.map(tab => <Tab.Screen name={tab.name} component={tab.component} />)}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomAppBar;
