import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    defaultContainer: {
      flexDirection: 'row',
      borderRadius: 5,
      padding: 3,
      backgroundColor: themeStyle[theme].backgroundSecondary,
    },
  });
};

export default style;
