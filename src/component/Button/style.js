import { StyleSheet } from 'react-native';
import config from '../../common/config';

const style = StyleSheet.create({
  default: {
    borderWidth: 0,
  },
  defaultText: {
    fontFamily: config.defaultFontFamily,
  },
  primary: {
    backgroundColor: '#ef6c00',
  },
  primaryText: {
    color: '#fff',
  },
  primaryActive: {
    backgroundColor: '#b53d00',
  },
  outline: {
    borderWidth: 1,
  },
  outlineText: {
    color: '#555',
  },
  lightActive: {
    backgroundColor: '#ddd',
  },
});

export default style;
