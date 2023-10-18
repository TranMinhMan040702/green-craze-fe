import axios from 'axios';

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
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            return await refreshToken(originalRequest);
        }

        return Promise.reject(error);
    },
);

const refreshToken = async (originalRequest) => {
    originalRequest._retry = true;

    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.post('/api/refresh-token', {
            refreshToken: token?.refreshToken,
            accessToken: token?.accessToken,
        });
        const { refreshToken, accessToken } = response.data;

        localStorage.setItem('token', { refreshToken, accessToken });

        originalRequest.headers.Authorization = `Bearer ${token?.accessToken}`;

        return axios(originalRequest);
    } catch (error) {}
};

export default axiosInstance;
