import OrderAddress from './OrderAddress';
import OrderDelivery from './OrderDelivery';
import OrderProducts from './OrderProducts';
import Payment from './Payment';
import './checkout.scss'

function CheckoutPage() {
    return <div className='w-[80%] mx-auto checkout-container pt-[5.6rem] pb-[10rem]'>
        <OrderAddress />
        <OrderProducts />
        <OrderDelivery />
        <Payment />
    </div>
}

export default CheckoutPage;