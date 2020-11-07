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
    containerBackground: {
      flex: 1,
      backgroundColor: themeStyle[theme].backgroundPrimary,
    },
    containerTop: {
      justifyContent: 'center',
      paddingTop: 100,
      paddingBottom: 20,
    },
    title: {
      textAlign: 'center',
      marginTop: 15,
    },
    description: {
      textAlign: 'center',
      marginTop: 15,
      fontSize: 20,
    },
    credit: {
      textAlign: 'center',
      marginTop: 50,
      fontSize: 16,
      paddingLeft: 50,
      paddingRight: 50,
    },
    creditButton: {
      marginTop: 20,
    },
    creditButtonText: {
      textAlign: 'center',
      fontSize: 16,
    },
  });
};

export default style;
