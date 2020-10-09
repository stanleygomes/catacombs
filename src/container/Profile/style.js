import { StyleSheet } from 'react-native';
import theme from '../../common/style/theme';

const activeTheme = 'light';

const style = StyleSheet.create({
  containerTop: {
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    textAlign: 'center',
    marginTop: 15,
  },
  containerResume: {
    flexDirection: 'row',
  },
  containerResumeBox: {
    backgroundColor: theme[activeTheme].secondary,
    borderRadius: 10,
    flexGrow: 1,
    margin: 15,
    padding: 25,
  },
  containerResumeBoxTitle: {
    fontSize: 30,
    textAlign: 'left',
  },
  containerResumeBoxValue: {
    textAlign: 'left',
  },
});

export default style;
