import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import customStyle from './style';
import Translate from '../Translate';

const H3 = props => {
  const { text, textPlain, style, theme } = props;

  return textPlain != null ? (
    <Text style={{ ...customStyle(theme).default, ...style }}>{textPlain}</Text>
  ) : (
    <Translate k={text} style={{ ...customStyle(theme).default, ...style }} />
  );
};

H3.defaultProps = {
  style: null,
  text: null,
  textPlain: null,
};

H3.propTypes = {
  theme: PropTypes.string.isRequired,
  text: PropTypes.string,
  style: PropTypes.object,
  textPlain: PropTypes.string,
};

export default H3;
