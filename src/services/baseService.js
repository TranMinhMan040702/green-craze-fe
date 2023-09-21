import axios from 'axios';

export const getData = async (url, params = {}) => {
    try {
        const response = await axios.get(url, {
            params,
        });
        return response.data;
    } catch (error) {
        return error?.response;
    }
};

export const deleteData = async (url) => {
    try {
        const response = await axios.delete(url);
        return response.data;
    } catch (error) {
        return error?.response;
    }
};
export const createFormData = async (url, formData) => {
    try {
        let response = await axios.postForm(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        return error?.response;
    }
};
export const createData = async (url, obj) => {
    try {
        let response = await axios.post(url, { ...obj });
        return response.data;
    } catch (error) {
        return error?.response;
    }
};
export const updateFormData = async (url, formData) => {
    try {
        let response = await axios.putForm(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        return error?.response;
    }
};
export const updateData = async (url, obj) => {
    try {
        let response = await axios.put(url, { ...obj });
        return response.data;
    } catch (error) {
        return error?.response;
    }
};
