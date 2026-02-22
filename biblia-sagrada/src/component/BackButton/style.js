import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    default: {},
    iconDefault: {
      fontSize: 40,
      color: themeStyle[theme].textPrimary,
    },
  });
};

export default style;
