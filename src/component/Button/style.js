import { StyleSheet } from 'react-native';
import theme from '../../common/style/theme';

const activeTheme = 'light';

const style = StyleSheet.create({
  default: {
    borderWidth: 0,
  },
  defaultText: {
    fontFamily: theme.font.defaultFontFamily,
  },
  primary: {
    backgroundColor: theme[activeTheme].primary,
  },
  primaryText: {
    color: '#fff',
  },
  primaryActive: {
    backgroundColor: theme[activeTheme].primary,
  },
  outline: {
    borderWidth: 1,
  },
  outlineText: {
    color: '#555',
  },
  lightActive: {
    backgroundColor: '#ddd',
  },
});

export default style;
