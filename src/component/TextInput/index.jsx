import React, { useState } from 'react';
import { TextInput as TextInputRN } from 'react-native';
import PropTypes from 'prop-types';
import customStyle from './style';

const TextInput = props => {
  const [isFocused, setIsFocused] = useState(false);
  const {
    style,
    value,
    theme,
    onChangeText,
    editable,
    keyboardType,
    multiline,
    onBlur,
    onFocus,
    onKeyPress,
    onSubmitEditing,
    placeholder,
  } = props;
  const inputFocusedStyle = isFocused === true ? customStyle(theme).focused : {};

  return (
    <TextInputRN
      style={{ ...inputFocusedStyle, ...customStyle(theme).default, ...style }}
      onChangeText={onChangeText}
      value={value}
      editable={editable}
      keyboardType={keyboardType}
      multiline={multiline}
      onBlur={arg => {
        setIsFocused(false);
        onBlur(arg);
      }}
      onFocus={arg => {
        setIsFocused(true);
        onFocus(arg);
      }}
      onKeyPress={onKeyPress}
      onSubmitEditing={onSubmitEditing}
      placeholder={placeholder}
    />
  );
};

TextInput.defaultProps = {
  value: null,
  style: {},
  onChangeText: () => {},
  editable: true,
  keyboardType: 'default',
  multiline: false,
  onBlur: () => {},
  onFocus: () => {},
  onKeyPress: () => {},
  onSubmitEditing: () => {},
  placeholder: null,
};

TextInput.propTypes = {
  theme: PropTypes.string.isRequired,
  value: PropTypes.any,
  style: PropTypes.object,
  onChangeText: PropTypes.func,
  editable: PropTypes.bool,
  keyboardType: PropTypes.string, // default, number-pad, decimal-pad, numeric, email-address, phone-pad
  multiline: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
};

export default TextInput;
