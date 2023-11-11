const apiRoutes = {
    common: {
        auth: {
            login: '/api/auth/login',
            google_login: '/api/auth/google-login',
            register: '/api/auth/register',
            register_otp_verify: '/api/auth/register/verify',
            register_resend_otp_verify: '/api/auth/register/resend',
            forgot_password: '/api/auth/forgot-password',
            forgot_password_resend_otp_verify: '/api/auth/forgot-password/resend',
            reset_password: '/api/auth/reset-password',
            refresh_token: '/api/auth/refresh-token',
        },
        user: {
            _: '/api/users',
            me: '/api/users/profile/me',
        },
        review: '/api/reviews',
        address: '/api/addresses',
        order: '/api/orders',
    },
    admin: {
        unit: '/api/units',
        delivery: '/api/deliveries',
        paymentMethod: '/api/paymentMethods',
        orderCancellationReason: '/api/orderCancellationReasons',
        employee: '/api/staffs',
        role: '/api/roles',
        transaction: '/api/transactions',
        brand: '/api/brands',
        product_category: '/api/product-categories',
        product: '/api/products',
        product_image: '/api/products/images',
        variant: '/api/variants',
        inventory: '/api/inventories',
        sale: '/api/sales',
        statistic: '/api/statistics',
    },
    web: {
        product: '/api/products',
        cart: 'api/carts',
        follow_product: 'api/user-follow-products',
    },
};

export default apiRoutes;
