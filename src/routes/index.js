import config from '../config';
import { EcommerceLayout } from '../layouts';
import AddressPage from '../pages/Ecommerce/Address';
import ProductFavoritesPage from '../pages/Ecommerce/ProductFavorites';
import HomePage from '../pages/Ecommerce/Home';
import ProfilePage from '../pages/Ecommerce/Profile';
import ChangePasswordPage from '../pages/Ecommerce/ChangePassword';
import OrderPage from '../pages/Ecommerce/Order';
import OrderDetailPage from '../pages/Ecommerce/OrderDetail';
import NotificationPage from '../pages/Ecommerce/Notification';
import LoginPage from '../pages/Ecommerce/Login';
import ProfilePage from '../pages/Ecommerce/ProfilePage';
import RegisterPage from '../pages/Ecommerce/Register';

const privateRoutes = [
    {
        path: config.routes.web.profile,
        component: ProfilePage,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: true,
    },
    {
        path: config.routes.web.address,
        component: AddressPage,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: true,
    },
    {
        path: config.routes.web.favorites,
        component: ProductFavoritesPage,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: true,
    },
    {
        path: config.routes.web.password,
        component: ChangePasswordPage,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: true,
    },
    {
        path: config.routes.web.order,
        component: OrderPage,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: true,
    },
    {
        path: config.routes.web.order_detail,
        component: OrderDetailPage,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: true,
    },
    {
        path: config.routes.web.notification,
        component: NotificationPage,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: true,
    },
];

const publicRoutes = [
    {
        path: config.routes.web.register,
        component: RegisterPage,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.login,
        component: LoginPage,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.home,
        component: HomePage,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.product,
        // component: Product,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: false,
    },
];
const routes = [...publicRoutes, ...privateRoutes];
export default routes;
