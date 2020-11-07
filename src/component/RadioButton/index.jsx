import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import customStyle from './style';
import Text from '../Text';

const RadioButton = props => {
  const { textKey, textPlain, style, value, selectedValue, onPress, theme } = props;

  return (
    <TouchableOpacity style={{ ...customStyle(theme).default, ...style }} onPress={onPress}>
      {value === selectedValue && (
        <AntDesign
          name="checkcircle"
          size={30}
          color="black"
          style={{ ...customStyle(theme).checkDefaultActive, ...style }}
        />
      )}

      {value !== selectedValue && <View style={{ ...customStyle(theme).checkDefault, ...style }} />}

      <Text
        textKey={textKey}
        textPlain={textPlain}
        style={{ ...customStyle(theme).textDefault, ...style }}
        theme={theme}
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
  theme: PropTypes.string.isRequired,
  style: PropTypes.object,
  textPlain: PropTypes.string,
  textKey: PropTypes.string,
  value: PropTypes.any,
  selectedValue: PropTypes.any,
  onPress: PropTypes.func,
};

export default RadioButton;
