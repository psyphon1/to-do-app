import axios from 'axios';
const AI_URL = 'http://localhost:5000/api/v1';

export const parseTaskAI = (text: string) =>
  axios.post(`${AI_URL}/tasks/parse-ai`, { text });