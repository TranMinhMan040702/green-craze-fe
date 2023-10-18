import Head from '../../../layouts/Admin/components/Head';
import config from '../../../config';

function BrandHead() {
    return (
        <Head
            route={config.routes.admin.brand_create}
            title={'Quản lý thương hiệu sản phẩm'}
            isAdd={true}
        />
    );
}

export default BrandHead;
