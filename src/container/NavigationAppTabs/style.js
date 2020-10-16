import { StyleSheet } from 'react-native';
import theme from '../../common/style/theme';

const activeTheme = 'light';

const style = StyleSheet.create({
  tabs: {
    height: 65,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
  label: {},
  inactiveBackgroundColor: {
    backgroundColor: theme[activeTheme].backgroundPrimary,
  },
  activeBackgroundColor: {
    backgroundColor: theme[activeTheme].backgroundPrimary,
  },
  inactiveTintColor: {
    backgroundColor: theme[activeTheme].textLight,
  },
  activeTintColor: {
    backgroundColor: theme[activeTheme].primary,
  },
});

export default style;
