import axios from 'axios';
import { app } from '../common/config';

const basePath = app.api.baseUrl;

const call = (method, endpoint, params, headers = []) => {
  return new Promise((resolve, reject) => {
    const config = {
      method,
      url: `${basePath}/${endpoint}`,
      data: params,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    axios(config)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

const get = (endpoint, params, headers = []) => {
  return new Promise((resolve, reject) => {
    call('get', endpoint, params, headers)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

const post = (endpoint, params, headers = []) => {
  return new Promise((resolve, reject) => {
    call('post', endpoint, params, headers)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

export default {
  get,
  post,
};
