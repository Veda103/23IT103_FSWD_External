import axios from 'axios';
import { getToken } from './auth';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API methods for events
export const eventApi = {
  getAll: (params) => api.get('/events', { params }),
  getById: (id) => api.get(`/events/${id}`),
  create: (data) => {
    const formData = new FormData();
    
    // Append all data to FormData
    Object.keys(data).forEach((key) => {
      if (key === 'image' && data[key] instanceof File) {
        formData.append('image', data[key]);
      } else {
        formData.append(key, data[key]);
      }
    });
    
    return api.post('/events', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  update: (id, data) => {
    const formData = new FormData();
    
    // Append all data to FormData
    Object.keys(data).forEach((key) => {
      if (key === 'image' && data[key] instanceof File) {
        formData.append('image', data[key]);
      } else {
        formData.append(key, data[key]);
      }
    });
    
    return api.put(`/events/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  delete: (id) => api.delete(`/events/${id}`),
};

// API methods for auth
export const authApi = {
  register: (userData) => api.post('/auth/register', userData),
  login: (userData) => api.post('/auth/login', userData),
  getMe: () => api.get('/auth/me'),
};

export default api;