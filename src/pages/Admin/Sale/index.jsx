import './sale.scss';
import Data from './Data';
import SaleHead from './SaleHead';

function SalePage() {
    return (
        <div className="sale-container">
            <SaleHead />
            <Data />
        </div>
    );
}

export default SalePage;
