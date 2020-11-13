import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import customStyle from './style';

const Clickable = props => {
  const { style, children, onPress, theme } = props;

  return (
    <TouchableOpacity style={{ ...customStyle(theme).default, ...style }} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

Clickable.defaultProps = {
  style: {},
  onPress: () => {},
  children: null,
};

Clickable.propTypes = {
  theme: PropTypes.string.isRequired,
  style: PropTypes.object,
  children: PropTypes.any,
  onPress: PropTypes.func,
};

export default Clickable;
