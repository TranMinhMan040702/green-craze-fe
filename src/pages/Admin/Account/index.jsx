import { useState } from 'react';

import './account.scss';
import Data from './Data';
import AccountHead from './AccountHead';

function AccountPage() {
    const [accountIds, setAccountIds] = useState([]);

    const [params, setParams] = useState({
        page: 1,
        size: 5,
    });
    return (
        <div className="account-container">
            <AccountHead params={params} accountIds={accountIds} />
            <Data params={params} setParams={setParams} setAccountIds={setAccountIds} />
        </div>
    );
}

export default AccountPage;
