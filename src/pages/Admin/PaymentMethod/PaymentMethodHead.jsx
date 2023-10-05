import Head from '../components/Head';
import config from '../../../config';

function PaymentMethodHead() {
    return (
        <Head
            route={config.routes.admin.payment_method_create}
            title={'Quản lý phương thức thanh toán'}
        />
    );
}

export default PaymentMethodHead;
