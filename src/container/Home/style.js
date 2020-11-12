import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeStyle[theme].backgroundPrimary,
    },
    containerTop: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingTop: 50,
      paddingBottom: 30,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: themeStyle[theme].backgroundPrimary,
    },
    profilePic: {
      borderRadius: 20,
    },
    title: {
      fontSize: 25,
    },
    subtitle: {
      fontSize: 20,
    },
    verseOfDayContainer: {
      margin: 20,
      padding: 20,
    },
    verseOfDayTitle: {
      textAlign: 'center',
      fontSize: 25,
    },
    verseOfDayText: {
      marginTop: 15,
      marginBottom: 15,
      fontSize: 16,
    },
    verseOfDayInfo: {
      color: themeStyle[theme].textSecondary,
    },
    verseOfDayActionbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    verseOfDayIcon: {
      color: themeStyle[theme].textSecondary,
    },
    pageTitle: {
      fontSize: 25,
      marginTop: 15,
      marginLeft: 20,
    },
    postContainer: {},
    postItemContainer: {},
    postItemImageContainer: {
      marginTop: 10,
      marginLeft: 20,
      marginBottom: 20,
      elevation: 2,
      borderRadius: 10,
    },
    postItemImage: {
      borderRadius: 10,
    },
  });
};

export default style;
