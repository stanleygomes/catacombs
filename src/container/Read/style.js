import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeStyle[theme].backgroundPrimary,
      flexDirection: 'column',
    },
    loadingContainer: {
      padding: 20,
    },
    header: {
      paddingTop: 50,
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: themeStyle[theme].backgroundPrimary,
    },
    headerSearchTitle: {
      marginTop: 10,
    },
    headerSearchIcon: {
      backgroundColor: themeStyle[theme].color,
    },
    searchInputContainer: {
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      backgroundColor: themeStyle[theme].backgroundPrimary,
      borderBottomWidth: 1,
      borderBottomColor: themeStyle[theme].seventh,
    },
    searchInputText: {
      borderWidth: 0,
      padding: 10,
      backgroundColor: themeStyle[theme].backgroundSecondary,
    },
    searchInputIcon: {
      color: themeStyle[theme].forth,
    },
  });
};

export default style;
