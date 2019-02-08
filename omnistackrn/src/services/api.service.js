import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.19.164.104:3000'
});

export default api;