import Head from '../../../layouts/Admin/components/Head';
import config from '../../../config';
import { useDeleteListBrand } from '../../../hooks/api';

function BrandHead({ brandIds, params }) {
    const mutationDelete = useDeleteListBrand({
        success: () => {},
        error: (err) => {
            console.log(err);
        },
        obj: {
            ids: brandIds,
            params: params,
        },
    });

    const onDisableAll = async () => {
        await mutationDelete.mutateAsync(brandIds);
    };

    return (
        <Head
            route={config.routes.admin.brand_create}
            title={'Quản lý thương hiệu sản phẩm'}
            isAdd={true}
            handleDisableAll={onDisableAll}
        />
    );
}

export default BrandHead;
