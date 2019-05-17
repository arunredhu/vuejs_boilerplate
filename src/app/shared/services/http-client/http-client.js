import axios from 'axios';

import { apiBaseUrl } from '@/environment/environment';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: apiBaseUrl
};

const httpClient = axios.create(config);

const authInterceptor = config => {
  /** add auth token */
  return config;
};

const loggerInterceptor = config => {
  /** Add logging here */
  return config;
};

// Adding the request interceptors
httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.request.use(loggerInterceptor);

// Adding the response interceptors
httpClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export { httpClient };
