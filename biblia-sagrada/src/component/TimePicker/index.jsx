import React from 'react';
import PropTypes from 'prop-types';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import customStyle from './style';

const TimePicker = props => {
  const { isVisible, mode, onConfirm, onCancel } = props;

  return (
    <DateTimePickerModal
      isVisible={isVisible}
      mode={mode}
      display="default"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

TimePicker.defaultProps = {
  isVisible: false,
  mode: 'time',
};

TimePicker.propTypes = {
  isVisible: PropTypes.bool,
  mode: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default TimePicker;
