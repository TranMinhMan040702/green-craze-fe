import Head from '../../../layouts/Admin/components/Head';
import config from '../../../config';
import { useDeleteListOrderCancellationReason } from '../../../hooks/api';

function ReasonCancelHead({ params, reasonCancellationIds }) {
    const mutationDelete = useDeleteListOrderCancellationReason({
        success: () => {},
        error: (err) => {
            console.log(err);
        },
        obj: {
            ids: reasonCancellationIds,
            params: params,
        },
    });
    const onDisableAll = async () => {
        await mutationDelete.mutateAsync(reasonCancellationIds);
    };
    return (
        <Head
            route={config.routes.admin.reason_cancel_create}
            title={'Quản lý lý do hủy đơn hàng'}
            isAdd={true}
            handleDisableAll={onDisableAll}
        />
    );
}

export default ReasonCancelHead;
