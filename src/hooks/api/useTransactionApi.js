import apiRoutes from '../../config/apiRoutes';
import { useFetch } from '../../utils/reactQuery';

export const useGetTransaction = (id) => {
    return useFetch({ url: `${apiRoutes.admin.transaction}/${id}`, key: 'getById' });
};

export const useGetListTransaction = (params) => {
    return useFetch({ url: apiRoutes.admin.transaction, params, key: 'getList' });
};
