import { useState } from 'react';

import Data from './Data';
import PaymentMethodHead from './PaymentMethodHead';

function PaymentMethodPage() {
    const [paymentMethodIds, setPaymentMethodIds] = useState([]);

    const [params, setParams] = useState({
        page: 1,
        size: 5,
    });
    return (
        <div className="payment-method-container">
            <PaymentMethodHead paymentMethodIds={paymentMethodIds} params={params} />
            <Data params={params} setParams={setParams} setPaymentMethodIds={setPaymentMethodIds} />
        </div>
    );
}

export default PaymentMethodPage;
