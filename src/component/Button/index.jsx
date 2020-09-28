import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonRN } from '@ant-design/react-native';
import customStyle from './style';
import Translate from '../Translate';

const Button = props => {
  const { content, text, style, variant, handleOnPress } = props;

  return (
    <ButtonRN
      style={{ ...customStyle.default, ...customStyle[variant], ...style }}
      activeStyle={{ ...customStyle.defaultActive, ...customStyle[`${variant}Active`], ...style }}
      onPress={handleOnPress}
    >
      {text != null ? (
        <Translate
          style={{ ...customStyle.defaultText, ...customStyle[`${variant}Text`] }}
          k={text}
        />
      ) : (
        <>{content}</>
      )}
    </ButtonRN>
  );
};

Button.defaultProps = {
  style: {},
  variant: 'primary',
  content: null,
  text: null,
  handleOnPress: () => {},
};

Button.propTypes = {
  text: PropTypes.string,
  content: PropTypes.element,
  style: PropTypes.object,
  variant: PropTypes.string,
  handleOnPress: PropTypes.func,
};

export default Button;
