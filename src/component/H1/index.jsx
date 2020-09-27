import React from 'react';
import PropTypes from 'prop-types';
import customStyle from './style';
import Translate from '../Translate';

const H1 = props => {
  const { text, style } = props;

  return <Translate k={text} style={{ ...customStyle.default, ...style }} />;
};

H1.defaultProps = {
  style: null,
};

H1.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default H1;
