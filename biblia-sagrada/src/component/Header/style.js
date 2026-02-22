import { StyleSheet } from 'react-native';
import theme from '../../common/style/theme';

const activeTheme = 'light';

const style = StyleSheet.create({
  default: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
  },
  iconDefault: {
    fontSize: 20,
    color: theme[activeTheme].textPrimary,
  },
});

export default style;
