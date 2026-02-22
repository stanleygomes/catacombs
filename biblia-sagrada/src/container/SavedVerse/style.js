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
    loadingContainer: {
      padding: 20,
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
    listTitle: {
      fontFamily: themeStyle.font.defaultFontFamilyBold,
    },
    listSubtitle: {
      fontSize: 12,
      color: themeStyle[theme].forth,
    },
    verseOfDayText: {
      marginTop: 15,
      marginBottom: 15,
      fontSize: 16,
    },
    verseActionbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    verseIcon: {
      color: themeStyle[theme].textSecondary,
    },
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
    panelContainerButton: {
      marginTop: 20,
    },
  });
};

export default style;
