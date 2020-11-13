import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'space-around',
      backgroundColor: themeStyle[theme].primary,
      flexDirection: 'column',
    },
    title: {
      textAlign: 'center',
      marginTop: 15,
    },
  });
};

export default style;
