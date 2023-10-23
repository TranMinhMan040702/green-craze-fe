import apiRoutes from '../../config/apiRoutes';
import {
    useDelete,
    useDeleteList,
    useFetch,
    usePostForm,
    usePutForm,
} from '../../utils/reactQuery';

export const useGetListProduct = (params) => {
    return useFetch({ url: apiRoutes.admin.product, params, key: 'getList' });
};

export const useGetProduct = (id) => {
    return useFetch({ url: `${apiRoutes.admin.product}/${id}`, key: 'getById' });
};

export const useCreateProduct = (updater) => {
    return usePostForm(apiRoutes.admin.product, updater);
};

export const useUpdateProduct = (updater) => {
    return usePutForm(apiRoutes.admin.product, updater);
};

export const useDeleteProduct = (updater) => {
    return useDelete(apiRoutes.admin.product, updater);
};

export const useDeleteListProduct = (updater) => {
    return useDeleteList(apiRoutes.admin.product, updater);
};
