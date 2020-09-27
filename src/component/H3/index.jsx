import React from 'react';
import PropTypes from 'prop-types';
import customStyle from './style';
import Translate from '../Translate';

const H3 = props => {
  const { text, style } = props;

  return <Translate k={text} style={{ ...customStyle.default, ...style }} />;
};

H3.defaultProps = {
  style: null,
};

H3.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default H3;
