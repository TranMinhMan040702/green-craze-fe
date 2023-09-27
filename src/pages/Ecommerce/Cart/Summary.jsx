import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import config from '../../../config';

function Summary() {
    return (
        <div className="bg-white md:ml-[5.5rem] max-h-[21rem] max-md:my-[3rem] max-md:w-[100%] w-[34rem] rounded-[0.5rem]">
            <div className="mx-[2rem] my-[1.1rem] border-b-[0.1rem]">
                <p className="mb-0 text-[1.9rem] text-[#537F44] font-bold">Giỏ hàng</p>
            </div>
            <div className="px-[2rem] pt-[0.9rem]">
                <div className="flex justify-between items-center text-[1.9rem] font-medium">
                    <p className="mb-0 text-black">Tổng tiền</p>
                    <span className="text-rose-600">229.000đ</span>
                </div>
                <NavLink
                    to={config.routes.web.checkout}
                    className="flex items-center justify-center rounded-[.3rem] my-[1.2rem] w-full xl:text-[1.9rem] max-xl:text-[1.5rem]  border-none text-white bg-orange-600"
                >
                    <span className="block p-4 text-center">Tiến hành thanh toán</span>
                </NavLink>
                <div className="text-center text-[1.6rem] max-md:mb-3 font-normal cursor-pointer">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className="ml-2">Tiếp tục mua hàng</span>
                </div>
            </div>
        </div>
    );
}

export default Summary;
