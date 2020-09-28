import React from 'react';
import { Image as ImageRN } from 'react-native';
import PropTypes from 'prop-types';

const Image = props => {
  const { source, width, height } = props;

  return <ImageRN style={{ width, height, resizeMode: 'contain' }} source={source} />;
};

Image.defaultProps = {};

Image.propTypes = {
  source: PropTypes.any.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Image;
