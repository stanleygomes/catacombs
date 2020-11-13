import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeStyle[theme].backgroundPrimary,
      flexDirection: 'column',
    },
    header: {
      paddingTop: 50,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: themeStyle[theme].backgroundSecondary,
    },
    headerSearchTitle: {
      marginTop: 10,
    },
    headerSearchIcon: {
      backgroundColor: themeStyle[theme].color,
    },
    searchInputContainer: {
      padding: 20,
      backgroundColor: themeStyle[theme].backgroundPrimary,
      borderBottomWidth: 1,
      borderBottomColor: themeStyle[theme].fifth,
    },
    searchInputText: {
      borderWidth: 0,
      padding: 10,
      backgroundColor: themeStyle[theme].backgroundSecondary,
    },
    segmentContainer: {
      marginTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
    },
  });
};

export default style;
