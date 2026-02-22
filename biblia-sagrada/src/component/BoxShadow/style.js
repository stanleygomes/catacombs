import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    default: {
      elevation: 5,
      borderRadius: 10,
      backgroundColor: themeStyle[theme].backgroundPrimary,
    },
  });
};

export default style;
