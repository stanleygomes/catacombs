import { StyleSheet } from 'react-native';
import themeStyle from '../../common/style/theme';

const style = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeStyle[theme].backgroundPrimary,
    },
    containerTop: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingTop: 50,
      paddingBottom: 30,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: themeStyle[theme].backgroundPrimary,
    },
    profilePic: {
      borderRadius: 20,
    },
    title: {
      fontSize: 25,
    },
    subtitle: {
      fontSize: 20,
    },
    postContainer: {
      paddingRight: 20,
    },
    postItemContainer: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
    },
    postItemImageContainer: {
      elevation: 5,
      shadowRadius: 2,
      borderRadius: 10,
    },
    postItemImage: {
      borderRadius: 10,
    },
  });
};

export default style;
