import { StyleSheet } from 'react-native';
import theme from '../../common/style/theme';

const activeTheme = 'light';

const style = StyleSheet.create({
  tabs: {
    height: 75,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
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
