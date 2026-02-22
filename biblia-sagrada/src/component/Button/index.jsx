import React from 'react';
import { TouchableOpacity, Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import customStyle from './style';
import Translate from '../Translate';

const Button = props => {
  const { textPlain, text, style, styleText, variant, onPress, theme } = props;

  return (
    <TouchableOpacity
      style={{ ...customStyle(theme).default, ...customStyle(theme)[variant], ...style }}
      onPress={onPress}
    >
      {text != null ? (
        <Translate
          style={{
            ...customStyle(theme).defaultText,
            ...customStyle(theme)[`${variant}Text`],
            ...styleText,
          }}
          k={text}
        />
      ) : (
        <RNText
          style={{
            ...customStyle(theme).defaultText,
            ...customStyle(theme)[`${variant}Text`],
            ...styleText,
          }}
        >
          {textPlain}
        </RNText>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  style: {},
  variant: 'primary',
  textPlain: null,
  text: null,
  styleText: null,
  onPress: () => {},
};

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  text: PropTypes.string,
  textPlain: PropTypes.string,
  style: PropTypes.object,
  styleText: PropTypes.object,
  variant: PropTypes.string,
  onPress: PropTypes.func,
};

export default Button;
