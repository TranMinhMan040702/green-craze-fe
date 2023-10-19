import apiRoutes from '../../config/apiRoutes';
import { useDelete, useDeleteList, useFetch, usePost, usePut } from '../../utils/reactQuery';

export const useGetMe = () => {
    return useFetch({ url: apiRoutes.common.user.me, key: 'getMe' });
}

export const useGetUser = (id) => {
    return useFetch({ url: `${apiRoutes.common.user._}/${id}`, key: 'getById' });
}

export const useGetListUser = (params) => {
    return useFetch({ url: apiRoutes.common.user, params, key: 'getList' });
}