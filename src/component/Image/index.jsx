import React from 'react';
import { Image as ImageRN } from 'react-native';
import PropTypes from 'prop-types';
import customStyle from './style';

const Image = props => {
  const { source, width, height, style } = props;
  const proportion = { width, height };

  return <ImageRN style={{ ...customStyle.default, ...proportion, ...style }} source={source} />;
};

Image.defaultProps = {
  style: {},
};

Image.propTypes = {
  source: PropTypes.any.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  style: PropTypes.object,
};

export default Image;
