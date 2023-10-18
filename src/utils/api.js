import axiosInstance from '../api/axiosInstance';

export const api = {
    async get(url, params = {}) {
        let resp = await axiosInstance.get(url, {
            params,
        });
        return resp.data;
    },
    async post(url, obj) {
        let resp = await axiosInstance.post(url, { ...obj });
        return resp.data;
    },
    async postForm(url, formData) {
        let resp = await axiosInstance.postForm(url, formData);
        return resp.data;
    },
    async put(url, obj) {
        let resp = await axiosInstance.put(url, { ...obj });
        return resp.data;
    },
    async putForm(url, formData) {
        let resp = await axiosInstance.putForm(url, formData);
        return resp.data;
    },
    async delete(url) {
        let resp = await axiosInstance.delete(url);
        return resp.data;
    },
};
