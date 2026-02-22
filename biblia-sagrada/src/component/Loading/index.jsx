import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';
import Text from '../Text';
import customStyle from './style';

const Loading = props => {
  const { theme, size, text } = props;

  return (
    <View style={customStyle(theme).container}>
      <ActivityIndicator size={size} color={customStyle(theme).default.color} />
      {text != null && <Text textKey={text} style={customStyle(theme).text} theme={theme} />}
    </View>
  );
};

Loading.defaultProps = {
  size: 'large',
  text: null,
};

Loading.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
  theme: PropTypes.string.isRequired,
};

export default Loading;
