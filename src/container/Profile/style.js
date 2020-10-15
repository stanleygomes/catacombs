import { StyleSheet } from 'react-native';
import theme from '../../common/style/theme';

const activeTheme = 'light';

const style = StyleSheet.create({
  containerTop: {
    justifyContent: 'center',
    paddingTop: 100,
    paddingBottom: 20,
  },
  title: {
    textAlign: 'center',
    marginTop: 15,
  },
  containerResume: {
    flexDirection: 'row',
    padding: 25,
  },
  containerResumeBox: {
    backgroundColor: theme[activeTheme].primaryLight,
    borderRadius: 30,
    flexGrow: 1,
    flexBasis: 0,
    padding: 25,
    margin: 10,
  },
  containerResumeBoxTitle: {
    fontSize: 30,
    fontFamily: theme.font.defaultFontFamilyBold,
    textAlign: 'left',
  },
  containerResumeBoxValue: {
    fontFamily: theme.font.defaultFontFamilyBold,
    textAlign: 'left',
  },
  logoutContainer: {
    padding: 20,
    marginBottom: 15,
  },
  logoutButton: {
    backgroundColor: theme[activeTheme].primaryLight,
  },
  logoutButtonText: {
    color: theme[activeTheme].terciary,
    fontFamily: theme.font.defaultFontFamilyBold,
  },
});

export default style;
