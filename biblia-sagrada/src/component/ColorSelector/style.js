import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    defaultContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    },
    default: {
      width: 50,
      height: 50,
      marginRight: 5,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: 'transparent',
    },
    defaultActive: {
      width: 55,
      height: 55,
      borderColor: themeStyle[theme].backgroundInverse,
    },
  });
};

export default style;
