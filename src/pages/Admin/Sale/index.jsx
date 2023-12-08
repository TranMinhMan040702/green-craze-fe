import './sale.scss';
import Data from './Data';
import SaleHead from './SaleHead';
import { useState } from 'react';

function SalePage() {
    const [saleIds, setSaleIds] = useState([]);
    const [params, setParams] = useState({
        page: 1,
        size: 5,
    });

    return (
        <div className="sale-container">
            <SaleHead />
            <Data params={params} setParams={setParams} />
        </div>
    );
}

export default SalePage;
