import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import customStyle from './style';

const SegmentTab = props => {
  const { children, tabStyleContainer, theme } = props;

  return (
    <View style={{ ...customStyle(theme).defaultContainer, ...tabStyleContainer }}>{children}</View>
  );
};

SegmentTab.defaultProps = {
  children: null,
  tabStyleContainer: {},
};

SegmentTab.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string.isRequired,
  tabStyleContainer: PropTypes.object,
};

export default SegmentTab;
