import axios from 'axios';

const API_URL = 'http://10.0.2.2:4000/api/v1';

export const register = (name: string, email: string, password: string) =>
  axios.post(`${API_URL}/auth/register`, { name, email, password });

export const login = (email: string, password: string) =>
  axios.post(`${API_URL}/auth/login`, { email, password });

export const fetchTasks = (token: string) =>
  axios.get(`${API_URL}/tasks`, { headers: { Authorization: `Bearer ${token}` } });

export const createTask = (token: string, data: any) =>
  axios.post(`${API_URL}/tasks`, data, { headers: { Authorization: `Bearer ${token}` } });