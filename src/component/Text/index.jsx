import React from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import customStyle from './style';
import Translate from '../Translate';

const Text = props => {
  const { textKey, textPlain, style } = props;

  return textPlain != null ? (
    <RNText style={{ ...customStyle.default, ...style }}>{textPlain}</RNText>
  ) : (
    <Translate k={textKey} style={{ ...customStyle.default, ...style }} />
  );
};

Text.defaultProps = {
  style: null,
  textKey: null,
  textPlain: null,
};

Text.propTypes = {
  style: PropTypes.object,
  textKey: PropTypes.string,
  textPlain: PropTypes.string,
};

export default Text;
