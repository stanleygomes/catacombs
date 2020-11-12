import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Text from '../Text';
import customStyle from './style';

const MenuItemIcon = props => {
  const { style, title, description, onPress, theme } = props;

  return (
    <View style={{ ...customStyle(theme).menuItemContainerDefault, ...style }}>
      <TouchableOpacity
        style={{ ...customStyle(theme).menuItemDefault, ...style }}
        onPress={onPress}
      >
        <View>
          <Text
            textKey={title}
            style={{ ...customStyle(theme).menuItemTextDefault, ...style }}
            theme={theme}
          />
          {description != null && (
            <Text
              textKey={description}
              style={{ ...customStyle(theme).menuItemTextDescriptionDefault, ...style }}
              theme={theme}
            />
          )}
        </View>
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
  title: null,
  description: null,
  onPress: () => {},
};

MenuItemIcon.propTypes = {
  theme: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export default MenuItemIcon;
