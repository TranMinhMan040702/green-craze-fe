import Head from '../components/Head';
import Data from './Data';
import './transaction.scss';

function TransactionPage() {
    return (
        <div className='transaction-container'>
            <Head title="Quản lý giao dịch" isDisableAll={false} isAdd={false} />
            <Data />
        </div>
    );
}

export default TransactionPage;
