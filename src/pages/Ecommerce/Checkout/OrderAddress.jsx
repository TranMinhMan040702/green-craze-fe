import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import config from '../../../config';
import { useGetDefaultAddress } from '../../../hooks/api';
import { useEffect, useState } from 'react';
import ChangeOrderAddressModal from './ChangeOrderAddressModal';

function OrderAddress({ setChosenAddress, chosenAddress }) {
    const { data, isLoading } = useGetDefaultAddress();
    useEffect(() => {
        if(isLoading)
            return;
        setChosenAddress(data?.data);
    }, [data, isLoading]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="address-container">
            <div className="top"></div>
            <div className="py-[1.5rem] px-[2rem] bg-white rounded-[0.3rem] shadow-[0_1px_2px_0_rgba(0,0,0,0.13)]">
                <div className="text-[#537F44] text-[2rem] font-medium flex items-center gap-[1rem]">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="">Địa chỉ nhận hàng</p>
                </div>
                {chosenAddress ? (
                    <div className="flex items-center justify-between gap-[5rem] mt-[2rem]">
                        <div className="flex">
                            <span className="text-black text-[1.6rem] font-medium mr-[1rem]">
                                {chosenAddress?.receiver}
                            </span>
                            <span className="text-black text-[1.6rem] font-medium mr-[2rem]">
                                {chosenAddress?.phone}
                            </span>
                        </div>
                        <span className="text-black text-[1.6rem] font-normal">
                            {`${chosenAddress?.street}, ${chosenAddress?.ward?.name}, ${chosenAddress?.district?.name}, ${chosenAddress?.province?.name}`}
                        </span>
                        <div>
                            <p
                                onClick={() => setIsModalOpen(true)}
                                className="text-blue-800 text-[1.6rem] font-normal cursor-pointer"
                            >
                                Thay đổi
                            </p>
                            <ChangeOrderAddressModal
                                isModalOpen={isModalOpen}
                                chosenAddress={chosenAddress}
                                setChosenAddress={setChosenAddress}
                                setIsModalOpen={setIsModalOpen}
                            />
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
        </div>
    );
}

export default OrderAddress;
