import config from '../config';
import { EcommerceLayout } from '../layouts';
import HomePage from '../pages/Ecommerce/Home';
const privateRoutes = [];

const publicRoutes = [
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
