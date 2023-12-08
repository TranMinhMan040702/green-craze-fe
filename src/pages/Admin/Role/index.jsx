import { useState } from 'react';

import Data from './Data';
import RoleHead from './RoleHead';

function RolePage() {
    const [params, setParams] = useState({
        page: 1,
        size: 5,
    });
    return (
        <div className="Role-container">
            <RoleHead />
            <Data params={params} setParams={setParams} />
        </div>
    );
}

export default RolePage;
