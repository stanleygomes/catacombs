import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      borderColor: themeStyle[theme].seventh,
      borderWidth: 1,
      borderRadius: 5,
    },
    icon: {
      marginRight: 10,
    },
    default: {
      color: themeStyle[theme].textInverse,
      flexGrow: 1,
    },
    focused: {},
    label: {
      fontSize: 14,
      fontFamily: themeStyle.font.defaultFontFamilyBold,
      marginRight: 10,
    },
  });
};

export default style;
