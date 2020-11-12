import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import customStyle from './style';

const Loading = props => {
  const { theme, size } = props;

  return <ActivityIndicator size={size} color={customStyle(theme).default.color} />;
};

Loading.defaultProps = {
  size: 'large',
};

Loading.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string.isRequired,
};

export default Loading;
