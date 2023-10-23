import Head from '../../../layouts/Admin/components/Head';
import config from '../../../config';

function ProductCategoryHead() {
    return (
        <Head
            route={config.routes.admin.product_category_create}
            title={'Quản lý danh mục sản phẩm'}
            isAdd={true}
        />
    );
}

export default ProductCategoryHead;
