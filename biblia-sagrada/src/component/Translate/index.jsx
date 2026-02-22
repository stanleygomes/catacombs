import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import i18n from '../../common/i18n';

const Translate = props => {
  const { k, style } = props;

  return <Text style={style}>{i18n.t(k)}</Text>;
};

Translate.defaultProps = {
  style: {},
};

Translate.propTypes = {
  style: PropTypes.object,
  k: PropTypes.string.isRequired,
};

export default Translate;
