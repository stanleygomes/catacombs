import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';


const style = theme => {
  return StyleSheet.create({
    tabs: {
      height: 75,
    },
    tab: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
    },
    icon: {},
    label: {
      fontSize: 30,
    },
    inactiveBackgroundColor: {
      backgroundColor: themeStyle[theme].backgroundPrimary,
    },
    activeBackgroundColor: {
      backgroundColor: themeStyle[theme].backgroundPrimary,
    },
    inactiveTintColor: {
      backgroundColor: themeStyle[theme].textInverse,
    },
    activeTintColor: {
      backgroundColor: themeStyle[theme].primary,
    },
  });
};

export default style;
