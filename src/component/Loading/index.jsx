import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import customStyle from './style';

const Loading = props => {
  const { style, theme, size } = props;

  return (
    <ActivityIndicator size={size} style={{ ...customStyle(theme).default.color, ...style }} />
  );
};

Loading.defaultProps = {
  size: 'large',
  style: {},
};

Loading.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Loading;
