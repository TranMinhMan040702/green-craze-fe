import './account.scss';
import Data from './Data';
import AccountHead from './AccountHead';

function AccountPage() {
    return (
        <div className="account-container">
            <AccountHead />
            <Data />
        </div>
    );
}

export default AccountPage;
