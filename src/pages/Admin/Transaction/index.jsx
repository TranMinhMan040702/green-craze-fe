import './transaction.scss';
import Head from '../../../layouts/Admin/components/Head';
import Data from './Data';

function TransactionPage() {
    return (
        <div className="transaction-container">
            <Head title="Quản lý giao dịch" isDisableAll={false} isAdd={false} />
            <Data />
        </div>
    );
}

export default TransactionPage;
