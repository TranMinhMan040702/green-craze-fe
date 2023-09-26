import {
    faCarCrash,
    faCashRegister,
    faChainSlash,
    faCoins,
    faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderItem from './OrderItem';

function Order({ isLastItem = false }) {
    return (
        <>
            <div className="border shadow">
                <div className="flex justify-end items-center border-b-[0.1rem] text-amber-500 text-[1.6rem] mx-[2.2rem] py-[1rem]">
                    <FontAwesomeIcon icon={faTruck} className="mr-[0.7rem]" />
                    <p className="mb-0">Đơn hàng chưa được xử lý</p>
                </div>
                <div className="border-b-[0.16rem] border-b-gray-300 cursor-pointer">
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </div>
                <div className="bg-stone-100">
                    <div className="flex justify-end px-[2.2rem] py-[1.5rem]">
                        <div className="flex items-center text-black text-[1.8rem]">
                            <FontAwesomeIcon icon={faCoins} />
                            <p className="ml-[.5rem]">Thành tiền: </p>
                        </div>
                        <span className="text-rose-600 font-medium text-[1.8rem] ml-[3.1rem]">75.000đ</span>
                    </div>
                </div>
            </div>
            {!isLastItem && <div className="space h-[1rem]"></div>}
        </>
    );
}

export default Order;
