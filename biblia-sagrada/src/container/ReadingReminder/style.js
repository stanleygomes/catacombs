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
      marginBottom: 30,
      fontSize: 20,
    },
    containerItem: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 30,
      paddingBottom: 30,
    },
    containerItemLine: {
      borderTopWidth: 1,
      borderTopColor: themeStyle[theme].fifth,
    },
    containerItemText: {
      textAlign: 'left',
      fontSize: 16,
    },
    containerItemValue: {
      fontSize: 18,
      fontFamily: themeStyle.font.defaultFontFamilyBold,
    },
  });
};

export default style;
