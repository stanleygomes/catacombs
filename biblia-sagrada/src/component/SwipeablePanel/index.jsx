import React from 'react';
import PropTypes from 'prop-types';
import { SwipeablePanel } from 'rn-swipeable-panel';
import customStyle from './style';
import { ScrollView } from 'react-native-gesture-handler';

const Loading = props => {
  const {
    theme,
    openLarge,
    showCloseButton,
    onClose,
    isActive,
    children,
    closeOnTouchOutside,
  } = props;

  return (
    <SwipeablePanel
      fullWidth
      openLarge={openLarge}
      showCloseButton={showCloseButton}
      onClose={onClose}
      isActive={isActive}
      closeOnTouchOutside={closeOnTouchOutside}
      style={customStyle(theme).style}
      barStyle={customStyle(theme).barStyle}
      closeRootStyle={customStyle(theme).closeRootStyle}
    >
      <ScrollView>{children}</ScrollView>
    </SwipeablePanel>
  );
};

Loading.defaultProps = {
  showCloseButton: false,
  openLarge: false,
  children: null,
  closeOnTouchOutside: true,
};

Loading.propTypes = {
  showCloseButton: PropTypes.bool,
  openLarge: PropTypes.bool,
  theme: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.any,
  closeOnTouchOutside: PropTypes.bool,
};

export default Loading;
