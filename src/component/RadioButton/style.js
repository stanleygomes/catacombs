import { StyleSheet } from 'react-native';
import theme from '../../common/style/theme';

const activeTheme = 'light';

const style = StyleSheet.create({
  default: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkDefault: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 20,
    backgroundColor: theme[activeTheme].textLight,
  },
  checkDefaultActive: {
    backgroundColor: theme[activeTheme].primary,
  },
  textDefault: {
    fontSize: 17,
    fontFamily: theme.font.defaultFontFamily,
  },
});

export default style;
