import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Image from '../Image';
import customStyle from './style';

const ImageClickable = props => {
  const { style, styleContainer, uri, source, width, height, onPress, theme } = props;

  return (
    <TouchableOpacity
      style={{ ...customStyle(theme).touchable, ...styleContainer }}
      onPress={onPress}
    >
      <Image uri={uri} source={source} width={width} height={height} style={style} />
    </TouchableOpacity>
  );
};

ImageClickable.defaultProps = {
  style: {},
  styleContainer: {},
  source: null,
  uri: null,
  onPress: () => {},
};

ImageClickable.propTypes = {
  theme: PropTypes.string.isRequired,
  source: PropTypes.any,
  uri: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  style: PropTypes.object,
  styleContainer: PropTypes.object,
  onPress: PropTypes.func,
};

export default ImageClickable;
