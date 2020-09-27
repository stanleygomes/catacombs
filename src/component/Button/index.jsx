import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonRN } from '@ant-design/react-native';
import customStyle from './style';

const Button = props => {
  const { children, style, variant } = props;

  return (
    <ButtonRN
      style={{ ...customStyle.default, ...customStyle[variant], ...style }}
      activeStyle={customStyle.inputActive}
      {...props}
    >
      {children}
    </ButtonRN>
  );
};

Button.defaultProps = {
  style: {},
  variant: 'primary',
  children: null,
};

Button.propTypes = {
  children: PropTypes.element,
  style: PropTypes.object,
  variant: PropTypes.string,
};

export default Button;
