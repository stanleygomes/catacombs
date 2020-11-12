import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    menuItemContainerDefault: {
      borderTopWidth: 1,
      borderTopColor: themeStyle[theme].fifth,
    },
    menuItemDefault: {
      paddingTop: 20,
      paddingBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    menuItemTextDefault: {
      fontSize: 17,
    },
    menuItemTextDescriptionDefault: {
      fontSize: 12,
    },
    menuItemIconDefault: {
      color: themeStyle[theme].forth,
      fontSize: 18,
    },
  });
};

export default style;
