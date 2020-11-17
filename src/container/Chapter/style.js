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
    loadingContainer: {
      padding: 20,
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
    searchInputContainer: {
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      backgroundColor: themeStyle[theme].backgroundPrimary,
      borderBottomWidth: 1,
      borderBottomColor: themeStyle[theme].fifth,
    },
    searchInputText: {
      borderWidth: 0,
      padding: 10,
      backgroundColor: themeStyle[theme].backgroundSecondary,
    },
    searchInputIcon: {
      color: themeStyle[theme].forth,
    },
    listContainer: {},
    panelContainer: {
      padding: 20,
    },
    panelContainerTitle: {
      marginTop: 15,
    },
    panelContainerForm: {
      paddingBottom: 30,
    },
    panelContainerSaveButton: {
      marginTop: 15,
      backgroundColor: themeStyle[theme].primaryLight,
    },
    panelContainerSaveButtonText: {
      color: themeStyle[theme].terciary,
      fontFamily: themeStyle.font.defaultFontFamilyBold,
    },
    panelContainerInput: {
      borderWidth: 0,
      backgroundColor: themeStyle[theme].backgroundSecondary,
    },
    panelContainerText: {
      fontSize: 16,
    },
    panelContainerShareText: {
      marginTop: 10,
      fontSize: 16,
    },
    panelContainerShareTextMin: {
      marginTop: 10,
      fontFamily: themeStyle.font.defaultFontFamilyBold,
    },
    panelContainerShareButton: {
      marginTop: 20,
    },
  });
};

export default style;
