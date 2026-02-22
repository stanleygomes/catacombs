import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    tabs: {
      flexDirection: 'row',
      marginTop: 10,
    },
    tabItem: {
      color: themeStyle[theme].forth,
      padding: 10,
      borderBottomWidth: 2,
      borderBottomColor: themeStyle[theme].backgroundPrimary,
    },
    tabItemActive: {
      color: themeStyle[theme].primary,
      borderBottomColor: themeStyle[theme].primary,
    },
  });
};

export default style;
