import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Text from '../../component/Text';
import Home from '../Home';
import Read from '../Read';
import Quiz from '../Quiz';
import Profile from '../Profile';
import AppContext from '../../provider/appContext';
import style from './style';

const { Navigator, Screen } = createBottomTabNavigator();

const NavigationAppTabs = () => {
  const tabBarOptions = theme => {
    return {
      style: style(theme).tabs,
      tabStyle: style(theme).tab,
      iconStyle: style(theme).icon,
      labelStyle: style(theme).label,
      inactiveBackgroundColor: style(theme).inactiveBackgroundColor.backgroundColor,
      activeBackgroundColor: style(theme).activeBackgroundColor.backgroundColor,
      inactiveTintColor: style(theme).inactiveTintColor.backgroundColor,
      activeTintColor: style(theme).activeTintColor.backgroundColor,
    };
  };

  const renderTab = (textKey, icon, theme) => {
    return {
      tabBarLabel: ({ color }) => <Text textKey={textKey} style={{ color }} theme={theme} />,
      tabBarIcon: ({ color, size }) => <AntDesign name={icon} color={color} size={size} />,
    };
  };

  const getScreens = theme => {
    return [
      {
        name: 'Home',
        component: Home,
        options: renderTab('home', 'home', theme),
      },
      {
        name: 'Read',
        component: Read,
        options: renderTab('read', 'book', theme),
      },
      {
        name: 'Quiz',
        component: Quiz,
        options: renderTab('quiz', 'questioncircleo', theme),
      },
      {
        name: 'Profile',
        component: Profile,
        options: renderTab('profile', 'user', theme),
      },
    ];
  };

  return (
    <AppContext.Consumer>
      {({ appConfig }) => (
        <Navigator tabBarOptions={tabBarOptions(appConfig.theme)}>
          {getScreens(appConfig.theme) != null &&
            getScreens(appConfig.theme).map(screen => (
              <Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={screen.options}
              />
            ))}
        </Navigator>
      )}
    </AppContext.Consumer>
  );
};

export default NavigationAppTabs;
