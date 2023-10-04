const routes = {
    admin: {
        dashboard: '/admin',
    },
    web: {
        register: '/register',
        login: '/login',
        home: '/home',
        cart: '/cart',
        checkout: '/checkout',
        shop: 'shop',
        product_detail: 'product-detail',
        product: '/products',
        profile: '/user/profile',
        address: '/user/address',
        favorites: '/user/favorites',
        password: '/user/password',
        order: '/user/order',
        order_detail: '/user/order/:id',
        notification: '/user/notification',
    },
};
export default routes;
