import config from '../../../config';
import AccountLayout from '../../../layouts/Ecommerce/AccountLayout';
import Order from './Order';
import OrderStateTab from './OrderStateTab';
import './order.scss';

function OrderPage() {
    return <AccountLayout isSetMinHeight={false} routeKey={config.routes.web.order}>
        <div className='order-container'>
            <OrderStateTab />
            <div className='space'></div>
            <Order />
            <Order />
            <Order isLastItem={true}/>
        </div>
    </AccountLayout>;
}

export default OrderPage;
