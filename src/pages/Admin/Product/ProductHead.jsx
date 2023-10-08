import Head from '../../../layouts/Admin/components/Head';
import config from '../../../config';

function ProductHead() {
    return (
        <Head route={config.routes.admin.product_create} title={'Quản lý sản phẩm'} isAdd={true} />
    );
}

export default ProductHead;
