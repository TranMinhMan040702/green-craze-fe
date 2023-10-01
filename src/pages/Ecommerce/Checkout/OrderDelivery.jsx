import { NavLink } from 'react-router-dom';

function OrderDelivery() {
    return (
        <div className="my-[3.4rem] bg-white rounded-[0.3rem] shadow-[0px_0px_2px_0px_#0000004D]">
            <div className="flex items-center max-sm:flex-col max-md:gap-[2rem]  max-2xl:gap-[24rem] 2xl:gap-[34.5rem] p-[2rem] text-black font-medium text-opacity-60 text-[1.6rem]">
                <p className="text-[2rem] font-medium text-[#537F44]">
                    Phương thức vận chuyển
                </p>
                <div className='flex items-center max-md:gap-[3rem] md:gap-[5.1rem] font-normal'>
                    <p className=' text-black'>Giao hàng hoả tốc</p>
                    <NavLink className="text-blue-800">Thay đổi</NavLink>
                </div>
            </div>
        </div>
    );
}

export default OrderDelivery;
