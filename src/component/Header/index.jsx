import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import BackButton from '../BackButton';
import customStyle from './style';

const Header = props => {
  const { showBackButton, children, style } = props;

  return (
    <View style={{ ...customStyle.default, ...style }}>
      {showBackButton === 'yes' && <BackButton />}
      {children}
    </View>
  );
};

Header.defaultProps = {
  showBackButton: 'yes',
  style: {},
  children: null,
};

Header.propTypes = {
  showBackButton: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};

export default Header;
