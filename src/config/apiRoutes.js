const apiRoutes = {
    common: {
        auth: {
            login: '/api/auth/login',
            register: '/api/auth/register',
        },
        user: {
            _: 'api/users',
            me: '/api/users/profile/me',
        },
    },
    admin: {
        unit: '/api/units',
        brand: '/api/brands',
        product_category: '/api/product-categories',
    },
};
export default apiRoutes;
