import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    on: {
      color: themeStyle[theme].primary,
    },
    off: {
      color: themeStyle[theme].fifth,
    },
  });
};

export default style;
