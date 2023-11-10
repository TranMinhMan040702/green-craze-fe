import { useEffect, useState } from 'react';
import { useGetCart } from '../../../hooks/api';
import Info from './Info';
import Summary from './Summary';
import './cart.scss';
import BreadCrumb from '../../../layouts/Ecommerce/components/Breadcrumb';

function CartPage() {
    const { data, isLoading } = useGetCart({
        pageSize: 1000,
    });

    const [chosenItem, setChosenItem] = useState([]);

    return (
        <>
            <BreadCrumb routes={[{ title: 'Giỏ hàng' }]} />
            <div className="cart-container flex justify-center max-md:flex-col pt-[6.3rem] rounded-lg">
                <Info
                    cartItems={data?.data?.items}
                    chosenItem={chosenItem}
                    setChosenItem={setChosenItem}
                />
                <Summary cartItems={data?.data?.items} chosenItem={chosenItem} />
            </div>
        </>
    );
}

export default CartPage;
