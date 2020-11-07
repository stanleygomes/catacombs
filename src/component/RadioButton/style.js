import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
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
      backgroundColor: themeStyle[theme].textInverse,
    },
    checkDefaultActive: {
      marginRight: 20,
      color: themeStyle[theme].primary,
    },
    textDefault: {
      fontSize: 17,
      fontFamily: themeStyle.font.defaultFontFamily,
    },
  });
};

export default style;
