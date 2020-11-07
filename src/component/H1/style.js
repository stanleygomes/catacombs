import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    default: {
      fontSize: 30,
      color: themeStyle[theme].textPrimary,
      fontFamily: themeStyle.font.defaultFontFamilyBold,
    },
  });
};

export default style;
