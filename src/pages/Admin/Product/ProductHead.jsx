import Head from '../../../layouts/Admin/components/Head';
import config from '../../../config';
import { useDeleteListProduct } from '../../../hooks/api';

function ProductHead({ productIds, params }) {
    const mutationDelete = useDeleteListProduct({
        success: () => {},
        error: (err) => {
            console.log(err);
        },
        obj: {
            ids: productIds,
            params: params,
        },
    });

    const onDisableAll = async () => {
        await mutationDelete.mutateAsync(productIds);
    };

    return (
        <Head
            route={config.routes.admin.product_create}
            title={'Quản lý sản phẩm'}
            isAdd={true}
            handleDisableAll={onDisableAll}
        />
    );
}

export default ProductHead;
