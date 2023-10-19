import Head from '../../../layouts/Admin/components/Head';
import config from '../../../config';

function CategoryHead() {
    return (
        <Head
            route={config.routes.admin.category_create}
            title={'Quản lý danh mục sản phẩm'}
            isAdd={true}
        />
    );
}

export default CategoryHead;