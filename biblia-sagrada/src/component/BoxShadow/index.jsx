import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import customStyle from './style';

const BoxShadow = props => {
  const { children, style, theme } = props;

  return <View style={{ ...customStyle(theme).default, ...style }}>{children}</View>;
};

BoxShadow.defaultProps = {
  style: null,
  children: null,
};

BoxShadow.propTypes = {
  theme: PropTypes.string.isRequired,
  style: PropTypes.object,
  children: PropTypes.any,
};

export default BoxShadow;
