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
import RegisterPage from '../pages/Ecommerce/Register';
import CartPage from '../pages/Ecommerce/Cart';
import CheckoutPage from '../pages/Ecommerce/Checkout';
import ShopPage from '../pages/Ecommerce/Shop';
import ProductDetailPage from '../pages/Ecommerce/ProductDetail';
import ReviewPage from '../pages/Admin/Review';
import AccountPage from '../pages/Admin/Account';
import EmployeePage from '../pages/Admin/Employee';
import EmployeeFormPage from '../pages/Admin/Employee/EmployeeForm';
import SalePage from '../pages/Admin/Sale';
import SaleFormPage from '../pages/Admin/Sale/SaleForm';
import DeliveryFormPage from '../pages/Admin/Delivery/DeliveryForm';
import DeliveryPage from '../pages/Admin/Delivery';
import TransactionPage from '../pages/Admin/Transaction';
import PaymentMethodPage from '../pages/Admin/PaymentMethod';
import PaymentMethodFormPage from '../pages/Admin/PaymentMethod/PaymentMethodForm';

const privateRoutes = [
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
    {
        path: config.routes.admin.review,
        component: ReviewPage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.account,
        component: AccountPage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.employee,
        component: EmployeePage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.employee_create,
        component: EmployeeFormPage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.employee_update_id,
        component: EmployeeFormPage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.sale,
        component: SalePage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.sale_create,
        component: SaleFormPage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.sale_update_id,
        component: SaleFormPage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
        private: true,
    },{
        path: config.routes.admin.delivery,
        component: DeliveryPage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.delivery_create,
        component: DeliveryFormPage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.delivery_update_id,
        component: DeliveryFormPage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
        private: true,
    },{
        path: config.routes.admin.payment_method,
        component: PaymentMethodPage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.payment_method_create,
        component: PaymentMethodFormPage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.payment_method_update_id,
        component: PaymentMethodFormPage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
        private: true,
    },
    {
        path: config.routes.admin.transaction,
        component: TransactionPage,
        layout: EcommerceLayout,
        roles: ['ADMIN'],
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
