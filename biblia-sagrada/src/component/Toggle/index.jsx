import React from 'react';
import PropTypes from 'prop-types';
import ToggleSwitch from 'toggle-switch-react-native';
import customStyle from './style';

const Toggle = props => {
  const { isOn, size, label, labelStyle, theme, onToggle } = props;

  return (
    <ToggleSwitch
      isOn={isOn}
      onColor={customStyle(theme).on.color}
      offColor={customStyle(theme).off.color}
      label={label}
      labelStyle={labelStyle}
      size={size}
      onToggle={onToggle}
    />
  );
};

Toggle.defaultProps = {
  isOn: false,
  size: 'large',
  label: null,
  labelStyle: {},
  onToggle: () => {},
};

Toggle.propTypes = {
  isOn: PropTypes.bool,
  theme: PropTypes.string.isRequired,
  size: PropTypes.string,
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  onToggle: PropTypes.func,
};

export default Toggle;
