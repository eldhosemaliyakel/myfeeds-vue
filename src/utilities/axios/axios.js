import axios from 'axios';
import { API_BASE_URL, LOCAL_STORAGE } from '../appConstants';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL
});

axiosInstance.interceptors.request.use(config => {
    const appId = localStorage.getItem(LOCAL_STORAGE.APP_ID);
    if(appId) {
        config.headers['app-id'] = appId;
    }
    return config;
}, error => {
    Promise.reject(error);
});

export default axiosInstance;