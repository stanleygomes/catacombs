import { Dimensions } from 'react-native';

const getDimention = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return {
    width: windowWidth,
    height: windowHeight,
  };
};

export default {
  getDimention,
};
