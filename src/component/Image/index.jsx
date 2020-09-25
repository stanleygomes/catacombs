import React from 'react';
import { Image as ImageRN } from 'react-native';
import PropTypes from 'prop-types';

const Image = props => {
  const { source, width, height, className } = props;

  return (
    <ImageRN className={`rounded-circle ${className}`} style={{ width, height }} source={source} />
  );
};

Image.defaultProps = {
  className: null,
};

Image.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Image;
