import Data from './Data';
import SaleHead from './SaleHead';
import './sale.scss'


function SalePage(){
    return <div className="sale-container">
        <SaleHead />
        <Data />
    </div>
}

export default SalePage;