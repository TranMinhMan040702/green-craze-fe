import apiRoutes from '../../config/apiRoutes';
import { useFetch } from '../../utils/reactQuery';

export const useGetTop5ReviewLatest = () => {
    return useFetch({ url: `${apiRoutes.admin.review}/top5-review-latest`, key: 'getList' });
};
