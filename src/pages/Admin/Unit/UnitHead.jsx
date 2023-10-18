import Head from '../../../layouts/Admin/components/Head';
import config from '../../../config';
import { useDeleteListUnit } from '../../../hooks/api';

function UnitHead({ unitIds, params }) {
    const mutationDelete = useDeleteListUnit({
        success: () => {},
        error: (err) => {
            console.log(err);
        },
        obj: {
            ids: unitIds,
            params: params,
        },
    });
    const onDisableAll = async () => {
        await mutationDelete.mutateAsync(unitIds);
    };
    return (
        <Head
            route={config.routes.admin.unit_create}
            title={'Quản lý đơn vị sản phẩm'}
            isAdd={true}
            handleDisableAll={onDisableAll}
        />
    );
}

export default UnitHead;
