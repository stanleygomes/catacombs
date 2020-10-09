import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import customStyle from './style';
import Translate from '../Translate';

const H3 = props => {
  const { text, textPlain, style } = props;

  return textPlain != null ? (
    <Text style={{ ...customStyle.default, ...style }}>{textPlain}</Text>
  ) : (
    <Translate k={text} style={{ ...customStyle.default, ...style }} />
  );
};

H3.defaultProps = {
  style: null,
  text: null,
  textPlain: null,
};

H3.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  textPlain: PropTypes.string,
};

export default H3;
