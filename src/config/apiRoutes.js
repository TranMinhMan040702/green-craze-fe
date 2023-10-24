const apiRoutes = {
    common: {
        auth: {
            login: '/api/auth/login',
            register: '/api/auth/register',
        },
        user: {
            _: '/api/users',
            me: '/api/users/profile/me'
        },
        address: '/api/addresses',
    },
    admin: {
        unit: '/api/units',
        delivery: '/api/deliveries',
        paymentMethod: '/api/paymentMethods',
        orderCancellationReason: '/api/orderCancellationReasons',
        employee: '/api/staffs',
        role: '/api/roles',
        transaction: '/api/transactions',
    }
}
export default apiRoutes;
            _: 'api/users',
            me: '/api/users/profile/me',
        },
    },
    admin: {
        unit: '/api/units',
        brand: '/api/brands',
        product_category: '/api/product-categories',
        product: '/api/products',
        product_image: '/api/products/images',
        variant: '/api/variants',
    },
};
export default apiRoutes;
