import Data from './Data';
import PaymentMethodHead from './PaymentMethodHead';

function PaymentMethodPage() {
    return (
        <div className="payment-method-container">
            <PaymentMethodHead />
            <Data />
        </div>
    );
}

export default PaymentMethodPage;
