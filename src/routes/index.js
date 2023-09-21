import config from '../config';
import { EcommerceLayout } from '../layouts';
import Home from '../layouts/Ecommerce/components/Home';
import Product from '../layouts/Ecommerce/components/Product';

const privateRoutes = [];

const publicRoutes = [
    {
        path: config.routes.web.home,
        component: Home,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.product,
        component: Product,
        layout: EcommerceLayout,
        roles: ['USER'],
        private: false,
    },
];
const routes = [...publicRoutes, ...privateRoutes];
export default routes;
