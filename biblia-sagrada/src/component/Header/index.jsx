import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import BackButton from '../BackButton';
import customStyle from './style';

const Header = props => {
  const { showBackButton, children, style, theme } = props;

  return (
    <View style={{ ...customStyle.default, ...style }}>
      {showBackButton === 'yes' && <BackButton theme={theme} />}
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
  theme: PropTypes.string.isRequired,
  showBackButton: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};

export default Header;
