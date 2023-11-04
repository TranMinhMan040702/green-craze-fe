import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import config from '../../../config';
import { useGetDefaultAddress } from '../../../hooks/api';
import { useEffect } from 'react';

function OrderAddress({ setDefaultAddress }) {
    const { data, isLoading } = useGetDefaultAddress();
    useEffect(() => {
        setDefaultAddress(data?.data);
    }, [data, isLoading]);
    return (
        <div className="py-[1.9rem] px-[2rem] bg-white rounded-[0.3rem] shadow-[0px_0px_2px_0px_#0000004D]">
            <div className="text-[#537F44] text-[2rem] font-medium flex items-center gap-[1rem]">
                <FontAwesomeIcon icon={faLocationDot} />
                <p className="">Địa chỉ nhận hàng</p>
            </div>
            {data?.data ? (
                <div className="flex items-center justify-between gap-[5rem] mt-[2rem]">
                    <div className="flex flex-col justify-around">
                        <span className="text-black text-[1.6rem] font-bold">
                            {data?.data?.receiver}
                        </span>
                        <span className="text-black text-[1.6rem] font-bold mr-[2rem]">
                            {data?.data?.phone}
                        </span>
                    </div>
                    <span className="text-black text-[1.6rem] font-normal">
                        {`${data?.data?.street}, ${data?.data?.ward?.name}, ${data?.data?.district?.name}, ${data?.data?.province?.name}`}
                    </span>
                    <div>
                        <NavLink
                            to={config.routes.web.address}
                            className="text-blue-800 text-[1.6rem] font-normal"
                        >
                            Thay đổi
                        </NavLink>
                    </div>
                </div>
            ) : (
                <div className="flex mt-[2rem] gap-[1rem]">
                    <p className="text-red-400 text-[1.6rem] font-normal">
                        Bạn chưa có địa chỉ giao hàng?
                    </p>
                    <div>
                        <NavLink
                            to={config.routes.web.address}
                            className="text-blue-800 text-[1.6rem] font-normal"
                        >
                            Tạo địa chỉ
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OrderAddress;
