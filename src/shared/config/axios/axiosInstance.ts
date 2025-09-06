import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost/api/', // Установите базовый URL
});

export default axiosInstance;
