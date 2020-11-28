import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text';
import Clickable from '../Clickable';
import customStyle from './style';

const Tabs = props => {
  const { data, itemActive, tabItemStyle, tabItemActiveStyle, onTabSelect, theme } = props;

  return (
    <View style={{ ...customStyle(theme).tabs }}>
      {data != null &&
        data.map(item => {
          let style = {};

          if (item.id === itemActive) {
            style = {
              ...customStyle(theme).tabItem,
              ...customStyle(theme).tabItemActive,
              ...tabItemStyle,
              ...tabItemActiveStyle,
            };
          } else {
            style = {
              ...customStyle(theme).tabItem,
              ...tabItemStyle,
            };
          }

          return (
            <Clickable onPress={() => onTabSelect(item)} theme={theme}>
              <Text textKey={item.text} style={style} theme={theme} />
            </Clickable>
          );
        })}
    </View>
  );
};

Tabs.defaultProps = {
  tabItemStyle: null,
  tabItemActiveStyle: null,
  data: [],
  itemActive: null,
  onTabSelect: () => {},
};

Tabs.propTypes = {
  theme: PropTypes.string.isRequired,
  tabItemStyle: PropTypes.object,
  tabItemActiveStyle: PropTypes.object,
  data: PropTypes.array,
  itemActive: PropTypes.number,
  onTabSelect: PropTypes.func,
};

export default Tabs;
