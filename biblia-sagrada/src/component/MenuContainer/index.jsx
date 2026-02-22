import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import customStyle from './style';

const MenuContainer = props => {
  const { children, style } = props;

  return <View style={{ ...customStyle.default, ...style }}>{children}</View>;
};

MenuContainer.defaultProps = {
  style: {},
  children: null,
};

MenuContainer.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};

export default MenuContainer;
