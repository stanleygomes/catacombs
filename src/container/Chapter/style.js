import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';
import deviceService from '../../service/device';

const style = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeStyle[theme].backgroundPrimary,
      flexDirection: 'column',
    },
    header: {
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
    listContainer: {},
  });
};

export default style;
