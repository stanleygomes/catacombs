import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: themeStyle[theme].backgroundPrimary,
      flexDirection: 'column',
    },
    title: {
      textAlign: 'center',
    },
    subtitle: {
      marginTop: 15,
      paddingLeft: 30,
      paddingRight: 30,
      textAlign: 'center',
    },
    loading: {
      color: themeStyle[theme].primary,
    },
    buttonSignInLater: {
      marginTop: 15,
    },
  });
};

export default style;
