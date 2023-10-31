import {
    faCarCrash,
    faCashRegister,
    faChainSlash,
    faCoins,
    faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderItem from './OrderItem';
import { NavLink } from 'react-router-dom';
import config from '../../../config';
import { getOrderStatus } from '../../../utils/constants';
import { numberFormatter } from '../../../utils/formatter';

function Order({ order, isLastItem = false }) {
    return (
        <>
            <div className="border shadow">
                <div
                    style={{
                        color: getOrderStatus(order?.status).color,
                    }}
                    className={`flex justify-end items-center border-b-[0.1rem] text-[1.6rem] mx-[2.2rem] py-[1rem]`}
                >
                    <FontAwesomeIcon
                        icon={getOrderStatus(order?.status).icon}
                        className="mr-[0.7rem]"
                    />
                    <p className="mb-0">{getOrderStatus(order?.status).title}</p>
                </div>
                <NavLink
                    to={config.routes.web.order + '/' + order?.code}
                    className="border-b-[0.16rem] border-b-gray-300 cursor-pointer"
                >
                    {order?.items?.map((item, index) => {
                        return (
                            <OrderItem
                                key={item?.id}
                                item={item}
                                isLastItem={index === order?.items?.length - 1}
                            />
                        );
                    })}
                </NavLink>
                <div className="bg-stone-100">
                    <div className="flex justify-end px-[2.2rem] py-[1.5rem]">
                        <div className="flex items-center text-black text-[1.8rem]">
                            <FontAwesomeIcon icon={faCoins} />
                            <p className="ml-[.5rem]">Thành tiền: </p>
                        </div>
                        <span className="text-rose-600 font-medium text-[1.8rem] ml-[3.1rem]">
                            {numberFormatter(order?.totalAmount)}
                        </span>
                    </div>
                </div>
            </div>
            {!isLastItem && <div className="space h-[1rem]"></div>}
        </>
    );
}

export default Order;
