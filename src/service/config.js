import localStorage from './localStorage';

const CONFIG_KEY = 'appConfig';
const themeList = [
  {
    text: 'themeDark',
    value: 'dark',
  },
  {
    text: 'themeLight',
    value: 'light',
  },
];
const defaultConfig = {
  theme: 'dark',
  signInChallenge: false,
};

const getThemeList = () => {
  return themeList;
};

const get = () => {
  return new Promise((resolve, reject) => {
    localStorage
      .get(CONFIG_KEY)
      .then(config => {
        if (config != null) {
          resolve(config);
        } else {
          resolve(defaultConfig);
        }
      })
      .catch(error => reject(error));
  });
};

const set = config => {
  return new Promise((resolve, reject) => {
    localStorage
      .set(CONFIG_KEY, config)
      .then(() => resolve(true))
      .catch(error => reject(error));
  });
};

const put = configUpdate => {
  return new Promise((resolve, reject) => {
    get(CONFIG_KEY)
      .then(config => {
        const newConfig = { ...config, ...configUpdate };
        set(newConfig)
          .then(() => resolve(newConfig))
          .catch(error => reject(error));
      })
      .catch(error => reject(error));
  });
};

export default {
  get,
  set,
  put,
  getThemeList,
};
