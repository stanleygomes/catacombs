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
      width: 300,
      paddingBottom: 30,
    },
    mainPhotoContainer: {
      elevation: 5,
      shadowRadius: 2,
      borderRadius: 10,
    },
    mainPhoto: {
      borderRadius: 10,
    },
    text: {
      fontSize: 18,
      textAlign: 'left',
      marginTop: 15,
      marginBottom: 15,
    },
    linkButton: {
      justifyContent: 'center',
      marginTop: 15,
    },
  });
};

export default style;
