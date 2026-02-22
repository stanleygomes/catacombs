import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Text from '../Text';
import customStyle from './style';

const MenuItemIcon = props => {
  const { style, titleKey, titlePlain, descriptionKey, descriptionPlain, onPress, theme } = props;

  return (
    <View style={{ ...customStyle(theme).menuItemContainerDefault, ...style }}>
      <TouchableOpacity
        style={{ ...customStyle(theme).menuItemDefault, ...style }}
        onPress={onPress}
      >
        <View>
          <Text
            textKey={titleKey}
            textPlain={titlePlain}
            style={{ ...customStyle(theme).menuItemTextDefault, ...style }}
            theme={theme}
          />
          {(descriptionKey != null || descriptionPlain != null) && (
            <Text
              textKey={descriptionKey}
              textPlain={descriptionPlain}
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
  titleKey: null,
  titlePlain: null,
  descriptionKey: null,
  descriptionPlain: null,
  onPress: () => {},
};

MenuItemIcon.propTypes = {
  theme: PropTypes.string.isRequired,
  titleKey: PropTypes.string,
  titlePlain: PropTypes.string,
  descriptionKey: PropTypes.string,
  descriptionPlain: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export default MenuItemIcon;
