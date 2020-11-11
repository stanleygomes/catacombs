import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    default: {
      color: themeStyle[theme].primary,
    },
  });
};

export default style;
