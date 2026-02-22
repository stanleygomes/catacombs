import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import customStyle from './style';

const BackButton = props => {
  const { style, theme } = props;
  const { goBack } = useNavigation();

  const handleBackButton = () => {
    goBack();
  };

  return (
    <TouchableOpacity
      hitSlop={{ top: 20, bottom: 20 }}
      style={{ ...customStyle(theme).default, ...style }}
      onPress={handleBackButton}
    >
      <Feather name="chevron-left" style={{ ...customStyle(theme).iconDefault, ...style }} />
    </TouchableOpacity>
  );
};

BackButton.defaultProps = {
  style: {},
};

BackButton.propTypes = {
  theme: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default BackButton;
