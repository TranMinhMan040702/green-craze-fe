import config from '../../../config';
import Head from '../components/Head';
function EmployeeHead() {
    return <Head route={config.routes.admin.employee_create} title={'Quản lý nhân viên'} />;
}

export default EmployeeHead;
