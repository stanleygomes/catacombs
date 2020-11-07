import React from 'react';
import PropTypes from 'prop-types';
import { RectButton } from 'react-native-gesture-handler';
import customStyle from './style';
import Translate from '../Translate';

const Button = props => {
  const { content, text, style, styleText, variant, onPress, theme } = props;

  return (
    <RectButton
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
        <>{content}</>
      )}
    </RectButton>
  );
};

Button.defaultProps = {
  style: {},
  variant: 'primary',
  content: null,
  text: null,
  styleText: null,
  onPress: () => {},
};

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  text: PropTypes.string,
  content: PropTypes.element,
  style: PropTypes.object,
  styleText: PropTypes.object,
  variant: PropTypes.string,
  onPress: PropTypes.func,
};

export default Button;
