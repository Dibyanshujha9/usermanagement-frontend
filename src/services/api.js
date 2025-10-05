import axios from 'axios';

// Vite environment variables need to be prefixed with VITE_
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL
});

export const getUsers = () => api.get('/users').then(res => res.data);
export const createUser = (user) => api.post('/users', user).then(res => res.data);

export default api;
