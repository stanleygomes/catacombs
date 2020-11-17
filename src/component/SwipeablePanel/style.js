import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    style: {
      backgroundColor: themeStyle[theme].backgroundPrimary,
    },
    barStyle: {
      backgroundColor: themeStyle[theme].backgroundTerciary,
    },
    closeRootStyle: {
      backgroundColor: themeStyle[theme].backgroundTerciary,
    },
  });
};

export default style;
