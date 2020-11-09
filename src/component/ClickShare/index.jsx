import React from 'react';
import { Share } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import customStyle from './style';

const ClickShare = props => {
  const { children, message, style } = props;

  const handleShare = m => {
    return new Promise((resolve, reject) => {
      Share.share({
        message: m,
      })
        .then(result => {
          resolve(result);
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        })
        .catch(error => reject(error));
    });
  };

  return (
    <TouchableOpacity
      style={{ ...customStyle().default, ...style }}
      onPress={() => handleShare(message)}
    >
      {children}
    </TouchableOpacity>
  );
};

ClickShare.defaultProps = {
  style: null,
};

ClickShare.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any.isRequired,
  message: PropTypes.string.isRequired,
};

export default ClickShare;
