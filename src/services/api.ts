import axios from 'axios';

const api = axios.create({
  baseURL: 'https://604a434c9251e100177ce4bc.mockapi.io/api',
});

export default api;

