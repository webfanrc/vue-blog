import axios from 'axios'
import store from '../store'

const service = axios.create({
  timeout: 30000,
});


service.interceptors.request.use(function (config) {

  store.dispatch('SetLoading', true);

  return config;
}, function (error) {
  return Promise.reject(error);
});

service.interceptors.response.use(function (response) {

  store.dispatch('SetLoading', false);

  return response;
});

export default service;