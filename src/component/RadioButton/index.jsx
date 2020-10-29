import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import customStyle from './style';
import Text from '../Text';

const RadioButton = props => {
  const { textKey, textPlain, style, value, selectedValue, onPress } = props;
  const styleState = value === selectedValue ? customStyle.checkDefaultActive : {};

  return (
    <TouchableOpacity style={{ ...customStyle.default, ...style }} onPress={onPress}>
      <View style={{ ...customStyle.checkDefault, ...styleState, ...style }} />
      <Text
        textKey={textKey}
        textPlain={textPlain}
        style={{ ...customStyle.textDefault, ...style }}
      />
    </TouchableOpacity>
  );
};

RadioButton.defaultProps = {
  style: null,
  textPlain: null,
  textKey: null,
  value: null,
  selectedValue: null,
  onPress: null,
};

RadioButton.propTypes = {
  style: PropTypes.object,
  textPlain: PropTypes.string,
  textKey: PropTypes.string,
  value: PropTypes.any,
  selectedValue: PropTypes.any,
  onPress: PropTypes.func,
};

export default RadioButton;
