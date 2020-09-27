import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import i18n from '../../service/i18n';

const Translate = props => {
  const { k } = props;

  return (
    <View>
      <Text>{i18n.t(k)}</Text>
    </View>
  );
};

Translate.propTypes = {
  k: PropTypes.string.isRequired,
};

export default Translate;
