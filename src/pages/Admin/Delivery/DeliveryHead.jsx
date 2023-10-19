import config from '../../../config';
import { useDeleteListDelivery } from '../../../hooks/api';
import Head from '../../../layouts/Admin/components/Head';

function DeliveryHead({ deliveryIds, params }) {
    const mutationDelete = useDeleteListDelivery({
        success: () => {},
        error: (err) => {
            console.log(err);
        },
        obj: {
            ids: deliveryIds,
            params: params,
        },
    });
    const onDisableAll = async () => {
        await mutationDelete.mutateAsync(deliveryIds);
    };
    return (
        <Head
            route={config.routes.admin.delivery_create}
            title={'Quản lý vận chuyển'}
            handleDisableAll={onDisableAll}
        />
    );
}

export default DeliveryHead;
