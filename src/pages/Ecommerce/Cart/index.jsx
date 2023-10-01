import Info from './Info';
import Summary from './Summary';
import './cart.scss';

function CartPage() {
    return <div className="cart-container flex justify-center max-md:flex-col pt-[6.3rem] rounded-lg">
        <Info />
        <Summary />
    </div>;
}

export default CartPage;
