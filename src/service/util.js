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

  return null;
};

const isInArray = (item, array) => {
  if (Array.isArray(array) === false) {
    return false;
  }

  return array.includes(item);
};

const removeItemFromArray = (item, array) => {
  return array.filter(value => value !== item);
};

const getToday = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

export default {
  strPadLeft,
  getSplitTime,
  isInArray,
  removeItemFromArray,
  getToday,
};
