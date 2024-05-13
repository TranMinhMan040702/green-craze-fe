import apiRoutes from '../../config/apiRoutes';
import {
    useFetch,
} from '../../utils/reactQuery';

export const useGetListRecommendationByUser = (params) => {
    return useFetch({ url: apiRoutes.web.recommendation_products.user, params, key: 'getListRecommendationProductsByUser' });
};

export const useGetListRecommendationByProduct = (id) => {
    return useFetch({ url: `${apiRoutes.web.recommendation_products.product}/${id}`, key: 'getListRecommendationByProduct' });
};
