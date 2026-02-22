import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import customStyle from './style';
import Translate from '../Translate';

const H1 = props => {
  const { text, textPlain, style, theme } = props;

  return textPlain != null ? (
    <Text style={{ ...customStyle(theme).default, ...style }}>{textPlain}</Text>
  ) : (
    <Translate k={text} style={{ ...customStyle(theme).default, ...style }} />
  );
};

H1.defaultProps = {
  style: null,
  text: null,
  textPlain: null,
};

H1.propTypes = {
  theme: PropTypes.string.isRequired,
  text: PropTypes.string,
  style: PropTypes.object,
  textPlain: PropTypes.string,
};

export default H1;
