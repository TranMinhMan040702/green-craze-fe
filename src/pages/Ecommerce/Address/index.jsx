import config from '../../../config';
import AccountLayout from '../../../layouts/Ecommerce/AccountLayout';
import Head from './Head';
import Wrapper from './Wrapper';
import './address.scss';

function AddressPage() {
    return (
        <AccountLayout routeKey={config.routes.web.address}>
            <div className="address-container">
                <Head />
                <Wrapper />
            </div>
        </AccountLayout>
    );
}

export default AddressPage;
