import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    default: {
      color: themeStyle[theme].sixth,
      // backgroundColor: themeStyle[theme].fifth,
      padding: 15,
      borderColor: themeStyle[theme].fifth,
      borderWidth: 2,
      borderRadius: 3,
    },
    focused: {
      backgroundColor: themeStyle[theme].fifth,
      borderColor: themeStyle[theme].fifth,
    },
  });
};

export default style;
