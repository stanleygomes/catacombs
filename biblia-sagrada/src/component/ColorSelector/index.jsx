import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import Clickable from '../Clickable';
import customStyle from './style';

const ColorSelector = props => {
  const { style, onPress, theme, colorSelected } = props;
  const colorsDefault = [
    '#B7D4DB',
    '#E5F3E4',
    '#F6DEB9',
    '#F6B7B9',
    '#F7C5BF',
    '#8DD4CD',
    '#85DE77',
    '#B3A0C9',
    '#7A6AA9',
    '#FF756D',
  ];

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={customStyle(theme).defaultContainer}>
          {colorsDefault.map(color => (
            <Clickable key={Math.random()} onPress={() => onPress(color)} theme={theme}>
              {colorSelected === color && (
                <View
                  style={{
                    ...customStyle(theme).default,
                    ...customStyle(theme).defaultActive,
                    ...style,
                    ...{ backgroundColor: color },
                  }}
                />
              )}
              {colorSelected !== color && (
                <View
                  style={{ ...customStyle(theme).default, ...style, ...{ backgroundColor: color } }}
                />
              )}
            </Clickable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

ColorSelector.defaultProps = {
  style: {},
  colorSelected: null,
  onPress: () => {},
};

ColorSelector.propTypes = {
  theme: PropTypes.string.isRequired,
  colorSelected: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export default ColorSelector;
