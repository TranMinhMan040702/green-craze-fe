import config from '../../../config';
import Head from '../../../layouts/Admin/components/Head';

function DeliveryHead() {
    return <Head route={config.routes.admin.delivery_create} title={'Quản lý vận chuyển'} />;
}

export default DeliveryHead;
