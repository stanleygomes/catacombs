import React, { useState } from 'react';
import { TextInput as TextInputRN, View } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import Text from '../Text';
import customStyle from './style';

const TextInput = props => {
  const [isFocused, setIsFocused] = useState(false);
  const {
    ref,
    style,
    styleContainer,
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
    name,
    label,
    iconName,
    iconSize,
    iconStyle,
  } = props;
  const inputFocusedStyle = isFocused === true ? customStyle(theme).focused : {};

  return (
    <View style={{ ...customStyle(theme).container, ...styleContainer }}>
      {iconName != null && (
        <AntDesign
          name={iconName}
          size={iconSize}
          style={{ ...customStyle(theme).icon, ...iconStyle }}
        />
      )}
      {label != null && <Text textKey={label} style={customStyle(theme).label} theme={theme} />}
      <TextInputRN
        ref={ref}
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
        name={name}
        onKeyPress={onKeyPress}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
      />
    </View>
  );
};

TextInput.defaultProps = {
  ref: null,
  value: null,
  label: null,
  style: {},
  styleContainer: {},
  onChangeText: () => {},
  editable: true,
  keyboardType: 'default',
  multiline: false,
  onBlur: () => {},
  onFocus: () => {},
  onKeyPress: () => {},
  onSubmitEditing: () => {},
  placeholder: null,
  iconName: null,
  iconSize: null,
  iconStyle: null,
};

TextInput.propTypes = {
  ref: PropTypes.any,
  theme: PropTypes.string.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  style: PropTypes.object,
  styleContainer: PropTypes.object,
  onChangeText: PropTypes.func,
  editable: PropTypes.bool,
  keyboardType: PropTypes.string, // default, number-pad, decimal-pad, numeric, email-address, phone-pad
  multiline: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconStyle: PropTypes.object,
};

export default TextInput;
