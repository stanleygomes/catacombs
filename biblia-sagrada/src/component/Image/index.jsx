import React from 'react';
import { Image as ImageRN } from 'react-native';
import PropTypes from 'prop-types';
import customStyle from './style';

const Image = props => {
  const { source, uri, width, height, style } = props;
  const proportion = { width, height };
  const imageSource = source != null ? source : { uri };

  return (
    <ImageRN style={{ ...customStyle.default, ...proportion, ...style }} source={imageSource} />
  );
};

Image.defaultProps = {
  source: null,
  uri: null,
  style: {},
};

Image.propTypes = {
  source: PropTypes.any,
  uri: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  style: PropTypes.object,
};

export default Image;
