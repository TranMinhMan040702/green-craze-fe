import Head from '../../../layouts/Admin/components/Head';
import config from '../../../config';

function UnitHead() {
    return (
        <Head
            route={config.routes.admin.unit_create}
            title={'Quản lý đơn vị sản phẩm'}
            isAdd={true}
        />
    );
}

export default UnitHead;
