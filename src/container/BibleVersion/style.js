import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';
import deviceService from '../../service/device';

const screenWidth = deviceService.getDimention().width;
const screenMargins = 30 * 2;
const sideWidth = 50 * 2;

const style = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeStyle[theme].backgroundPrimary,
    },
    containerTop: {
      paddingTop: 20,
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 20,
    },
    scrollView: {},
    errorMessage: {
      marginTop: 10,
      padding: 15,
      borderRadius: 5,
      backgroundColor: themeStyle[theme].terciary,
    },
    errorMessageText: {
      color: themeStyle[theme].primaryText,
    },
    title: {
      textAlign: 'left',
      marginTop: 15,
    },
    description: {
      textAlign: 'left',
      marginTop: 15,
      fontSize: 20,
    },
    listContainer: {
      flex: 1,
    },
    listItem: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
      borderBottomWidth: 1,
      borderBottomColor: themeStyle[theme].seventh,
    },
    listItemContainerLeft: {
      width: 50,
      justifyContent: 'center',
    },
    listItemContainerCenter: {
      width: screenWidth - sideWidth - screenMargins,
    },
    listItemContainerRight: {
      width: 50,
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    listItemContainer: {},
    listTitle: {
      fontFamily: themeStyle.font.defaultFontFamilyBold,
    },
    listSubtitle: {
      fontSize: 12,
      color: themeStyle[theme].forth,
    },
    downloadProgress: {
      marginTop: 10,
      fontFamily: themeStyle.font.defaultFontFamilyBold,
    },
    listCheckFalse: {
      width: 30,
      height: 30,
      borderRadius: 30,
      marginRight: 20,
      backgroundColor: themeStyle[theme].textInverse,
    },
    listCheckTrue: {
      marginRight: 20,
      color: themeStyle[theme].primary,
    },
    listIcon: {
      color: themeStyle[theme].textPrimary,
    },
    listIconChecked: {
      color: themeStyle[theme].primary,
    },
  });
};

export default style;
