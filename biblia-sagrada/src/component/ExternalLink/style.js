import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = () => {
  return StyleSheet.create({
    default: {
      fontSize: 16,
      fontFamily: themeStyle.font.defaultFontFamily,
    },
  });
};

export default style;
