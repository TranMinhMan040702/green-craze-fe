import axios from 'axios';
import config from '../config';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token?.accessToken) {
            config.headers.Authorization = `Bearer ${token.accessToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error?.config;
        if (error?.response?.status === 401 && !originalRequest._retry) {
            return await refreshToken(originalRequest);
        }

        return Promise.reject(error);
    },
);

const refreshToken = async (originalRequest) => {
    originalRequest._retry = true;

    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.post(config.apiRoutes.common.auth.refresh_token, {
            refreshToken: token?.refreshToken,
            accessToken: token?.accessToken,
        });
        if (!response) {
            localStorage.removeItem('token');
            window.location.href = '/login';
            return;
        }
        const { refreshToken, accessToken } = response.data;
        localStorage.setItem('token', { refreshToken, accessToken });
        originalRequest.headers.Authorization = `Bearer ${token?.accessToken}`;

        return axios(originalRequest);
    } catch (error) {}
};

export default axiosInstance;
