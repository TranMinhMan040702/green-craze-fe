import Head from '../../../layouts/Admin/components/Head';
import config from '../../../config';
import { useDeleteListPaymentMethod } from '../../../hooks/api';

function PaymentMethodHead({paymentMethodIds, params}) {
    const mutationDelete = useDeleteListPaymentMethod({
        success: () => {},
        error: (err) => {
            console.log(err);
        },
        obj: {
            ids: paymentMethodIds,
            params: params,
        },
    });
    const onDisableAll = async () => {
        await mutationDelete.mutateAsync(paymentMethodIds);
    };
    return (
        <Head
            route={config.routes.admin.payment_method_create}
            title={'Quản lý phương thức thanh toán'}
            handleDisableAll={onDisableAll}
        />
    );
}

export default PaymentMethodHead;
