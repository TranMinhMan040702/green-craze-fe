import { useDeleteListProductImage, useDeleteListVariant } from '../../../hooks/api';
import Head from '../../../layouts/Admin/components/Head';

function ProductImageHead({ productImageIds, productId }) {
    const mutationDelete = useDeleteListProductImage({
        success: () => {},
        error: (err) => {
            console.log(err);
        },
        obj: {
            ids: productImageIds,
            params: { productId },
        },
    });

    const onDisableAll = async () => {
        await mutationDelete.mutateAsync(productImageIds);
    };

    return (
        <Head title={'Quản lý hình ảnh sản phẩm'} isAdd={false} handleDisableAll={onDisableAll} />
    );
}

export default ProductImageHead;
