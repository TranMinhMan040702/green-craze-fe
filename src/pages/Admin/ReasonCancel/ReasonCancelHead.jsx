import Head from '../../../layouts/Admin/components/Head';
import config from '../../../config';

function ReasonCancelHead() {
    return (
        <Head
            route={config.routes.admin.reason_cancel_create}
            title={'Quản lý lý do hủy đơn hàng'}
            isAdd={true}
        />
    );
}

export default ReasonCancelHead;
