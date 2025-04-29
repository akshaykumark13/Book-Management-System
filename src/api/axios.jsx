import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // ✅ Correct
 // also make sure it's spelled right!
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default api;