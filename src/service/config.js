import localStorage from './localStorage';

const CONFIG_KEY = 'appConfig';
const defaultConfig = {
  theme: 'dark',
  signInChallenge: false,
};

const get = () => {
  return new Promise((resolve, reject) => {
    localStorage
      .get(CONFIG_KEY)
      .then(data => {
        if (data != null) {
          resolve(data);
        } else {
          resolve(defaultConfig);
        }
      })
      .catch(error => reject(error));
  });
};

const set = data => {
  return new Promise((resolve, reject) => {
    localStorage
      .set(CONFIG_KEY, data)
      .then(() => resolve(true))
      .catch(error => reject(error));
  });
};

const put = dataUpdate => {
  return new Promise((resolve, reject) => {
    get(CONFIG_KEY)
      .then(data => {
        set({ ...data, ...dataUpdate })
          .then(() => resolve(true))
          .catch(error => reject(error));
      })
      .catch(error => reject(error));
  });
};

export default {
  get,
  set,
  put,
};
