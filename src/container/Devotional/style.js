import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';
import deviceService from '../../service/device';

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
      width: deviceService.getDimention().width - 60,
      paddingTop: 10,
      paddingBottom: 30,
    },
    mainPhotoContainer: {
      maxWidth: 300,
      maxHeight: 300,
      elevation: 5,
      shadowRadius: 2,
      borderRadius: 10,
    },
    mainPhoto: {
      maxWidth: 300,
      maxHeight: 300,
      borderRadius: 10,
    },
    text: {
      fontSize: 18,
      textAlign: 'left',
      marginTop: 30,
      marginBottom: 15,
    },
    linkButton: {
      justifyContent: 'center',
      marginTop: 15,
    },
  });
};

export default style;
