import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import customStyle from './style';

const ScrollViewRefresh = props => {
  const { children, style, isRefreshing, onRefresh, theme } = props;

  return (
    <ScrollView
      style={{ ...customStyle(theme).scrollView, ...style }}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
    >
      {children}
    </ScrollView>
  );
};

ScrollViewRefresh.defaultProps = {
  style: null,
  onRefresh: () => {},
  isRefreshing: () => {},
  children: null,
};

ScrollViewRefresh.propTypes = {
  theme: PropTypes.string.isRequired,
  onRefresh: PropTypes.func,
  isRefreshing: PropTypes.bool,
  children: PropTypes.any,
  style: PropTypes.object,
};

export default ScrollViewRefresh;
