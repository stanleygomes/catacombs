const strPadLeft = value => {
  return value < 10 ? `0${value}` : value;
};

const getSplitTime = (time, type) => {
  if (time == null) {
    return null;
  }

  const splitTime = time.split(':');

  if (type === 'hour') {
    return splitTime[0];
  }

  if (type === 'minute') {
    return splitTime[1];
  }
};

export default {
  strPadLeft,
  getSplitTime,
};
