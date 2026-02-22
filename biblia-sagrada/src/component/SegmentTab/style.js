import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    defaultTab: {
      flex: 1,
      padding: 10,
      borderRadius: 5,
      justifyContent: 'center',
    },
    defaultTabActive: {
      backgroundColor: themeStyle[theme].backgroundPrimary,
    },
    defaultText: {
      fontSize: 12,
      textAlign: 'center',
      color: themeStyle[theme].textSecondary,
    },
  });
};

export default style;
