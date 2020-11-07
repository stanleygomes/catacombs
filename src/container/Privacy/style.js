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
    scrollView: {
      flexGrow: 1,
    },
    containerTop: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingTop: 50,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
    },
    title: {
      textAlign: 'center',
      marginTop: 15,
    },
    description: {
      textAlign: 'left',
      marginTop: 15,
      fontSize: 20,
    },
    button: {
      marginTop: 30,
    },
  });
};

export default style;
