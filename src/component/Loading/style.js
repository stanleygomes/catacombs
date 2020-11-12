import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    default: {
      color: themeStyle[theme].primary,
    },
    text: {
      color: themeStyle[theme].textPrimary,
      marginTop: 15,
    },
  });
};

export default style;
