import { useEffect, useState } from 'react';
import config from '../../../config';
import { useGetListUserOrder } from '../../../hooks/api';
import AccountLayout from '../../../layouts/Ecommerce/AccountLayout';
import Order from './Order';
import OrderStateTab from './OrderStateTab';
import './order.scss';
import SpinLoading from '../../../layouts/Ecommerce/components/SpinLoading';

function OrderPage() {
    const [chosenStatus, setChosenStatus] = useState(null);
    const { data, isLoading } = useGetListUserOrder({
        orderStatus: chosenStatus,
    });
    
    return (
        <AccountLayout
            isSetMinHeight={false}
            routeKey={config.routes.web.order}
            isSetBackground={data?.data?.items?.length === 0}
        >
            <div className="order-container">
                <OrderStateTab setChosenStatus={setChosenStatus} />
                <div className="space"></div>
                {isLoading ? (
                    <div className="flex justify-center">
                        <SpinLoading />
                    </div>
                ) : data?.data?.items?.length === 0 ? (
                    <div className="text-center mt-20">
                        <div className="flex justify-center">
                            <img
                                className="w-48 h-48 block"
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/orderlist/5fafbb923393b712b96488590b8f781f.png"
                            />
                        </div>
                        <p className="text-[1.6rem]">Chưa có đơn hàng</p>
                    </div>
                ) : (
                    data?.data?.items?.map((order, index) => {
                        return (
                            <Order
                                key={index}
                                order={order}
                                isLastItem={index === data?.data?.items?.length - 1}
                            />
                        );
                    })
                )}
            </div>
        </AccountLayout>
    );
}

export default OrderPage;
