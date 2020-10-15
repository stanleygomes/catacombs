import { StyleSheet } from 'react-native';
import theme from '../../common/style/theme';

const activeTheme = 'light';

const style = StyleSheet.create({
  default: {},
  iconDefault: {
    fontSize: 40,
    color: theme[activeTheme].textPrimary,
  },
});

export default style;
