import axios from "axios";

axios.interceptors.request.use((config) => {
  // Do something before request is sent
    config.baseURL = 'http://192.168.1.5:3000/api'
    
    return config;
}, (error) => {
})

export const axiosInstance = axios