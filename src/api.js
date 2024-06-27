// src/api.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080', // URL de tu backend
  withCredentials: false, // Esto depende de tu configuración CORS
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default apiClient;
