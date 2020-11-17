import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    default: {
      borderWidth: 0,
      borderColor: 'transparent',
      padding: 10,
      borderRadius: 5,
    },
    defaultText: {
      fontFamily: themeStyle.font.defaultFontFamily,
      textAlign: 'center',
    },
    primary: {
      backgroundColor: themeStyle[theme].primary,
    },
    primaryText: {
      color: themeStyle[theme].primaryText,
    },
    outline: {
      borderWidth: 1,
    },
    outlineText: {
      color: themeStyle[theme].forth,
    },
    light: {
      borderWidth: 1,
    },
    lightText: {
      color: themeStyle[theme].textPrimary,
    },
  });
};

export default style;
