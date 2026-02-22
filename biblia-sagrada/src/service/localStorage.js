import AsyncStorage from '@react-native-community/async-storage';

const set = (key, value) => {
  return new Promise((resolve, reject) => {
    try {
      const jsonValue = JSON.stringify(value);

      AsyncStorage.setItem(key, jsonValue)
        .then(() => resolve(true))
        .catch(error => reject(error));
    } catch (e) {
      reject(e);
    }
  });
};

const get = key => {
  return new Promise((resolve, reject) => {
    try {
      AsyncStorage.getItem(key)
        .then(value => {
          const jsonValue = value != null ? JSON.parse(value) : null;
          resolve(jsonValue);
        })
        .catch(error => reject(error));
    } catch (e) {
      reject(e);
    }
  });
};

const remove = key => {
  return new Promise((resolve, reject) => {
    try {
      AsyncStorage.removeItem(key)
        .then(() => resolve(true))
        .catch(error => reject(error));
    } catch (e) {
      reject(e);
    }
  });
};

export default {
  set,
  get,
  remove,
};
