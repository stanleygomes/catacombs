import React from 'react';
import PropTypes from 'prop-types';
import Clickable from '../Clickable';
import Text from '../Text';
import customStyle from './style';

const Segment = props => {
  const { value, tabActiveIndex, tabIndex, tabStyle, theme, onPress } = props;

  const getTabStyle = activeIndex => {
    if (activeIndex === tabIndex) {
      return { ...customStyle(theme).defaultTab, ...tabStyle };
    }

    return {
      ...customStyle(theme).defaultTab,
      ...customStyle(theme).defaultTabActive,
      ...tabStyle,
    };
  };

  return (
    <Clickable style={getTabStyle(tabActiveIndex)} theme={theme} onPress={onPress}>
      <Text textPlain={value} style={customStyle(theme).defaultText} theme={theme} />
    </Clickable>
  );
};

Segment.defaultProps = {
  value: null,
  tabActiveIndex: 0,
  tabIndex: 0,
  tabStyle: null,
  onPress: () => {},
};

Segment.propTypes = {
  value: PropTypes.string,
  theme: PropTypes.string.isRequired,
  tabActiveIndex: PropTypes.number,
  tabIndex: PropTypes.number,
  tabStyle: PropTypes.string,
  onPress: PropTypes.func,
};

export default Segment;
