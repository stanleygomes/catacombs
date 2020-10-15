import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  containerTop: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    textAlign: 'center',
    marginTop: 15,
  },
  description: {
    textAlign: 'left',
    marginTop: 15,
    fontSize: 20,
  },
  button: {
    marginTop: 30,
  },
});

export default style;
