import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import config from '../../../config';

function OrderAddress() {
    return (
        <div className='py-[1.9rem] px-[2rem] bg-white rounded-[0.3rem] shadow-[0px_0px_2px_0px_#0000004D]'>
            <div
                className="text-[#537F44] text-[2rem] font-medium flex items-center gap-[1rem]"
            >
                <FontAwesomeIcon icon={faLocationDot} />
                <p className=''>Địa chỉ nhận hàng</p>
            </div>
            <div className="flex items-center gap-[5rem] mt-[2rem]">
                <div className='max-md:flex max-md:flex-col'>
                    <span className="text-black text-[1.6rem] font-bold">Nguyễn Minh Sơn</span>
                    <span className="text-black text-[1.6rem] font-bold md:ml-[0.7rem] mr-[2rem]">0354964840</span>
                    <span className="text-black text-[1.6rem] font-normal">
                        Tân Lập, Tân Định, Tịnh Biên, An Giang
                    </span>
                </div>
                <div>
                    <NavLink to={config.routes.web.address} className="text-blue-800 text-[1.6rem] font-normal">Thay đổi</NavLink>
                </div>
            </div>
        </div>
    );
}

export default OrderAddress;
