import { StyleSheet } from 'react-native';
import theme from '../../common/style/theme';

const activeTheme = 'light';

const style = StyleSheet.create({
  default: {
    borderWidth: 0,
    padding: 10,
    borderRadius: 5,
  },
  defaultText: {
    fontFamily: theme.font.defaultFontFamily,
    textAlign: 'center',
  },
  primary: {
    backgroundColor: theme[activeTheme].primary,
  },
  primaryText: {
    color: '#fff',
  },
  outline: {
    borderWidth: 1,
  },
  outlineText: {
    color: '#555',
  },
});

export default style;
