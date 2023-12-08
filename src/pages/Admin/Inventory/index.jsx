import { useState } from 'react';
import Data from './Data';
import InventoryHead from './InventoryHead';
import './inventory.scss';

function InventoryPage() {
    const [params, setParams] = useState({
        page: 1,
        size: 10,
    });

    return (
        <div className="inventory-container">
            <InventoryHead />
            <Data params={params} setParams={setParams} />
        </div>
    );
}

export default InventoryPage;
