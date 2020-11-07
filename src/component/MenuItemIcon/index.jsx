import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Text from '../Text';
import customStyle from './style';

const MenuItemIcon = props => {
  const { style, textKey, textPlain, onPress, theme } = props;

  return (
    <View style={{ ...customStyle(theme).menuItemContainerDefault, ...style }}>
      <TouchableOpacity
        style={{ ...customStyle(theme).menuItemDefault, ...style }}
        onPress={onPress}
      >
        <Text
          textKey={textKey}
          textPlain={textPlain}
          style={{ ...customStyle(theme).menuItemTextDefault, ...style }}
          theme={theme}
        />
        <Feather
          name="chevron-right"
          style={{ ...customStyle(theme).menuItemIconDefault, ...style }}
        />
      </TouchableOpacity>
    </View>
  );
};

MenuItemIcon.defaultProps = {
  style: {},
  textKey: null,
  textPlain: null,
  onPress: () => {},
};

MenuItemIcon.propTypes = {
  theme: PropTypes.string.isRequired,
  textKey: PropTypes.string,
  textPlain: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export default MenuItemIcon;
