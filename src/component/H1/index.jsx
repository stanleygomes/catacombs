import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import customStyle from './style';
import Translate from '../Translate';

const H1 = props => {
  const { text, textPlain, style } = props;

  return textPlain != null ? (
    <Text style={{ ...customStyle.default, ...style }}>{textPlain}</Text>
  ) : (
    <Translate k={text} style={{ ...customStyle.default, ...style }} />
  );
};

H1.defaultProps = {
  style: null,
  text: null,
  textPlain: null,
};

H1.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  textPlain: PropTypes.string,
};

export default H1;
