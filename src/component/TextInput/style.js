import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    default: {
      color: themeStyle[theme].sixth,
      padding: 15,
      borderColor: themeStyle[theme].fifth,
      borderWidth: 2,
      borderRadius: 5,
    },
    focused: {
      backgroundColor: themeStyle[theme].fifth,
      borderColor: themeStyle[theme].fifth,
    },
    label: {
      fontSize: 14,
      fontFamily: themeStyle.font.defaultFontFamilyBold,
    },
  });
};

export default style;
