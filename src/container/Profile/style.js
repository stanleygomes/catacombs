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
    containerResume: {
      flexDirection: 'row',
      padding: 25,
    },
    containerResumeBox: {
      backgroundColor: themeStyle[theme].primaryLight,
      borderRadius: 30,
      flexGrow: 1,
      flexBasis: 0,
      padding: 25,
      margin: 10,
    },
    containerResumeBoxTitle: {
      fontSize: 30,
      fontFamily: themeStyle.font.defaultFontFamilyBold,
      textAlign: 'left',
    },
    containerResumeBoxValue: {
      fontFamily: themeStyle.font.defaultFontFamilyBold,
      textAlign: 'left',
    },
    logoutContainer: {
      padding: 20,
      marginBottom: 15,
    },
    logoutButton: {
      backgroundColor: themeStyle[theme].primaryLight,
    },
    logoutButtonText: {
      color: themeStyle[theme].terciary,
      fontFamily: themeStyle.font.defaultFontFamilyBold,
    },
  });
};

export default style;
