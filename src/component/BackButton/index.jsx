import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import customStyle from './style';

const BackButton = props => {
  const { style } = props;
  const { goBack } = useNavigation();

  const handleBackButton = () => {
    goBack();
  };

  return (
    <TouchableOpacity style={{ ...customStyle.default, ...style }} onPress={handleBackButton}>
      <Feather name="chevron-left" style={{ ...customStyle.iconDefault, ...style }} />
    </TouchableOpacity>
  );
};

BackButton.defaultProps = {
  style: {},
};

BackButton.propTypes = {
  style: PropTypes.object,
};

export default BackButton;
