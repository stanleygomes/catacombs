import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeStyle[theme].backgroundPrimary,
    },
    containerTop: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      flex: 1,
      paddingTop: 50,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
    },
    scrollView: {},
    title: {
      textAlign: 'left',
      marginTop: 15,
    },
    description: {
      textAlign: 'left',
      marginTop: 15,
      fontSize: 20,
    },
    inputText: {
      marginTop: 15,
    },
    button: {
      marginTop: 30,
      backgroundColor: themeStyle[theme].primaryLight,
    },
    buttonText: {
      color: themeStyle[theme].terciary,
      fontFamily: themeStyle.font.defaultFontFamilyBold,
    },
  });
};

export default style;
