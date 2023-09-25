import AccountLayout from '../../../layouts/Ecommerce/AccountLayout';
import './profilepage.scss';
import Info from './Info';
import Head from './Head';
import config from '../../../config';

function ProfilePage() {
    return (
        <AccountLayout routeKey={config.routes.web.profile}>
            <div className="profile-container">
                <Head />
                <Info />
            </div>
        </AccountLayout>
    );
}

export default ProfilePage;
