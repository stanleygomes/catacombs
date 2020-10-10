import { StyleSheet } from 'react-native';
import theme from '../../common/style/theme';

const style = StyleSheet.create({
  menuItemContainerDefault: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  menuItemDefault: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuItemTextDefault: {
    fontSize: 17,
    fontFamily: theme.font.defaultFontFamily,
  },
  menuItemIconDefault: {
    color: '#777',
    fontSize: 25,
  },
});

export default style;
