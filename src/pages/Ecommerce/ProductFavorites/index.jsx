import config from '../../../config';
import AccountLayout from '../../../layouts/Ecommerce/AccountLayout';
import Head from './Head';
import Wrapper from './Wrapper';

function ProductFavoritesPage() {
    return <AccountLayout routeKey={config.routes.web.favorites}>
        <div className="favorites-container">
                <Head />
                <Wrapper />
            </div>
    </AccountLayout>;
}

export default ProductFavoritesPage;
