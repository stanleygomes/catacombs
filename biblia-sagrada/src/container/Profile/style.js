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
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      paddingTop: 50,
      paddingBottom: 30,
      paddingLeft: 20,
      paddingRight: 20,
      shadowOpacity: 0.1,
      elevation: 2,
      backgroundColor: themeStyle[theme].backgroundPrimary,
    },
    profilePic: {
      borderRadius: 100,
    },
    title: {
      marginLeft: 25,
      fontSize: 25,
    },
    subtitle: {
      marginLeft: 25,
      fontSize: 12,
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
      color: themeStyle[theme].sixth,
      textAlign: 'left',
    },
    containerResumeBoxValue: {
      fontFamily: themeStyle.font.defaultFontFamilyBold,
      color: themeStyle[theme].sixth,
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
