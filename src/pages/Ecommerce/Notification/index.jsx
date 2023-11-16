import config from '../../../config';
import AccountLayout from '../../../layouts/Ecommerce/AccountLayout';
import Head from './Head';
import Wrapper from './Wrapper';
import './notification.scss';

function NotificationPage() {
    return (
        <AccountLayout isSetMinHeight={false} routeKey={config.routes.web.notification}>
            <div className="notification-container  shadow-[0_1px_2px_0_rgba(0,0,0,0.13)]">
                <Head />
                <Wrapper />
            </div>
        </AccountLayout>
    );
}

export default NotificationPage;
