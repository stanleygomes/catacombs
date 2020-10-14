import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Text from '../Text';
import customStyle from './style';

const MenuItemIcon = props => {
  const { style, textKey, textPlain, onPress } = props;

  return (
    <View style={{ ...customStyle.menuItemContainerDefault, ...style }}>
      <TouchableOpacity style={{ ...customStyle.menuItemDefault, ...style }} onPress={onPress}>
        <Text
          textKey={textKey}
          textPlain={textPlain}
          style={{ ...customStyle.menuItemTextDefault, ...style }}
        />
        <Feather name="chevron-right" style={{ ...customStyle.menuItemIconDefault, ...style }} />
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
  textKey: PropTypes.string,
  textPlain: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export default MenuItemIcon;
