const apiRoutes = {
    common: {
        auth: {
            login: '/api/auth/login',
            register: '/api/auth/register',
        },
        user: {
            _: '/api/users',
            me: '/api/users/profile/me'
        }
    },
    admin: {
        unit: '/api/units',
        delivery: '/api/deliveries',
        paymentMethod: '/api/paymentMethods',
        orderCancellationReason: '/api/orderCancellationReasons'
    }
}
export default apiRoutes;