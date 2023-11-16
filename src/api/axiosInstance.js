import axios from 'axios';
import config from '../config';
import myHistory from '../utils/myHistory';
import { notification } from 'antd';

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
            if(localStorage.getItem('token'))
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
            notification.error({
                message: 'Thông báo',
                description: 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại',
            });
            myHistory.replace(config.routes.web.login);
            return Promise.reject();
        }
        const { refreshToken, accessToken } = response.data;
        localStorage.setItem('token', { refreshToken, accessToken });
        // originalRequest.headers.Authorization = `Bearer ${token?.accessToken}`;

        // return axios(originalRequest);
    } catch (error) {
        myHistory.replace(config.routes.web.login);
        localStorage.removeItem('token');
        notification.error({
            message: 'Thông báo',
            description: 'Bạn vui lòng đăng nhập để tiếp tục',
        });
        return Promise.reject(error);
    }
};

export default axiosInstance;
