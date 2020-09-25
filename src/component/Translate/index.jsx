import React from 'react';
import Text from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Translate = props => {
  const { t } = useTranslation();
  const { k } = props;

  return <Text>{t(k)}</Text>;
};

Translate.propTypes = {
  k: PropTypes.string.isRequired,
};

export default Translate;
