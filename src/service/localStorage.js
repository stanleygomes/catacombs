const set = (key, value) => window.localStorage.setItem(key, value);
const get = key => window.localStorage.getItem(key);
const remove = key => window.localStorage.removeItem(key);

export default {
  set,
  get,
  remove,
};
