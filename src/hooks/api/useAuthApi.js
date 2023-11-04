import apiRoutes from '../../config/apiRoutes';
import { usePost } from '../../utils/reactQuery';

export const useLogin = (updater) => {
    return usePost(apiRoutes.common.auth.login, updater);
}

export const useLoginByGoogle = (updater) => {
    return usePost(apiRoutes.common.auth.google_login, updater);
}

export const useRegister = (updater) => {
    return usePost(apiRoutes.common.auth.register, updater);
}