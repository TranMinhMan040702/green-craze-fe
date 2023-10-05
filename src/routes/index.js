import config from '../config';
import { AdminLayout, EcommerceLayout } from '../layouts';
// page web
import AddressPage from '../pages/Ecommerce/Address';
import ProductFavoritesPage from '../pages/Ecommerce/ProductFavorites';
import HomePage from '../pages/Ecommerce/Home';
import ProfilePage from '../pages/Ecommerce/Profile';
import ChangePasswordPage from '../pages/Ecommerce/ChangePassword';
import OrderPage from '../pages/Ecommerce/Order';
import OrderDetailPage from '../pages/Ecommerce/OrderDetail';
import NotificationPage from '../pages/Ecommerce/Notification';
import LoginPage from '../pages/Ecommerce/Login';
import RegisterPage from '../pages/Ecommerce/Register';
import CartPage from '../pages/Ecommerce/Cart';
import CheckoutPage from '../pages/Ecommerce/Checkout';
import ShopPage from '../pages/Ecommerce/Shop';
// page admin
import DashboardPage from '../pages/Admin/Dashboard';
import ProductDetailPage from '../pages/Ecommerce/ProductDetail';
import ProductPage from '../pages/Admin/Product';
import CategoryPage from '../pages/Admin/Category';
import InventoryPage from '../pages/Admin/Inventory';
import OrderPages from '../pages/Admin/Order';

const privateRoutes = [
    // Admin
    {
        path: config.routes.admin.dashboard,
        component: DashboardPage,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.product,
        component: ProductPage,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.category,
        component: CategoryPage,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.order,
        component: OrderPages,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.inventory,
        component: InventoryPage,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: true,
    },

    // User
    {
        path: config.routes.web.checkout,
        component: CheckoutPage,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: true,
    },
    {
        path: config.routes.web.cart,
        component: CartPage,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: true,
    },
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
        path: config.routes.web.product_detail,
        component: ProductDetailPage,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.shop,
        component: ShopPage,
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
