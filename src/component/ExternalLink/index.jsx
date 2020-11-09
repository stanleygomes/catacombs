import React from 'react';
import { Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import customStyle from './style';

const ExternalLink = props => {
  const { children, link, style } = props;

  const handleOpenLink = l => {
    Linking.openURL(l);
  };

  return (
    <TouchableOpacity
      style={{ ...customStyle().default, ...style }}
      onPress={() => handleOpenLink(link)}
    >
      {children}
    </TouchableOpacity>
  );
};

ExternalLink.defaultProps = {
  style: null,
};

ExternalLink.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired,
};

export default ExternalLink;
