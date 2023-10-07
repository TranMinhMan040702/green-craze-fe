import Data from './Data';
import InventoryHead from './UnitHead';

function InventoryPage() {
    return (
        <div className="unit-container">
            <InventoryHead />
            <Data />
        </div>
    );
}

export default InventoryPage;
