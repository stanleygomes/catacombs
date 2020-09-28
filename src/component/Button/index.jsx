import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonRN } from '@ant-design/react-native';
import customStyle from './style';
import Translate from '../Translate';

const Button = props => {
  const { content, style, variant, handleOnPress } = props;

  return (
    <ButtonRN
      style={{ ...customStyle.default, ...customStyle[variant], ...style }}
      activeStyle={{ ...customStyle.defaultActive, ...customStyle[`${variant}Active`], ...style }}
      onPress={handleOnPress}
    >
      {typeof content === 'string' ? (
        <Translate
          style={{ ...customStyle.defaultText, ...customStyle[`${variant}Text`] }}
          k={content}
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
  handleOnPress: () => {},
};

Button.propTypes = {
  content: PropTypes.any,
  style: PropTypes.object,
  variant: PropTypes.string,
  handleOnPress: PropTypes.func,
};

export default Button;
