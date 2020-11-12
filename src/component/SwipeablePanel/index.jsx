import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SwipeablePanel } from 'rn-swipeable-panel';
import customStyle from './style';

const Loading = props => {
  const { theme, openLarge, showCloseButton, onClose, isActive } = props;

  return (
    <SwipeablePanel
      fullWidth
      openLarge={openLarge}
      showCloseButton={showCloseButton}
      onClose={onClose}
      isActive={isActive}
    />
  );
};

Loading.defaultProps = {
  showCloseButton: false,
  openLarge: false,
};

Loading.propTypes = {
  showCloseButton: PropTypes.bool,
  openLarge: PropTypes.bool,
  theme: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Loading;
