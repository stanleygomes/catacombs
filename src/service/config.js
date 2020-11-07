// import { useContext } from 'react';
import localStorage from './localStorage';
// import AppContext from '../provider/appContext';

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
        set({ ...config, ...configUpdate })
          .then(() => resolve(true))
          .catch(error => reject(error));
      })
      .catch(error => reject(error));
  });
};

// const getCurrentTheme = () => {
//   const { appConfig } = useContext(AppContext);

//   console.log(appConfig);
// };

export default {
  get,
  set,
  put,
  getThemeList,
  // getCurrentTheme,
};
