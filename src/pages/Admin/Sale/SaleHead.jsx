import Head from '../components/Head';
import config from '../../../config';
function SaleHead() {
    return <Head route={config.routes.admin.sale_create} title={'Quản lý khuyến mãi'} />;
}

export default SaleHead;
