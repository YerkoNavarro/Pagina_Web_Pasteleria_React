import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para añadir JWT a todas las peticiones (Inutilizado)
api.interceptors.request.use(
  (config) => {
    // Código JWT inutilizado - ya no envía headers
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores 401/403 (Inutilizado)
api.interceptors.response.use(
  response => response,
  error => {
    // Código JWT inutilizado - ya no maneja 401/403 por token
    // if (error.response?.status === 401) {
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('login');
    //   window.location.href = '/login';
    // }
    return Promise.reject(error);
  }
);

export default api;
