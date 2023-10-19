import { Navigate, useNavigate } from 'react-router-dom';
import { isTokenStoraged } from '../../utils/storage';
import config from '../../config';
import { useGetMe } from '../../hooks/api';

function PrivateRoute({ children, roles }) {
    const { data, isLoading } = useGetMe();

    if (!isTokenStoraged()) {
        return <Navigate to={config.routes.web.login} replace />;
    }

    if (isLoading) return <div>Loading...</div>;

    if (!data) {
        return <Navigate to={config.routes.web.login} replace />;
    }

    if (roles.includes('ADMIN') && !roles.includes('USER')) {
        const res = data?.data.roles.some((role) => role === 'ADMIN');
        if (!res) {
            return <Navigate to={config.routes.admin.forbidden} replace />;
        }
    }

    return children;
}

export default PrivateRoute;
