import { StyleSheet } from 'react-native';
import theme from '../../common/style/theme';

const style = StyleSheet.create({
  tabs: {
    height: 65,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
  label: {
    fontSize: 12,
    fontFamily: theme.font.defaultFontFamily,
  },
});

export default style;
