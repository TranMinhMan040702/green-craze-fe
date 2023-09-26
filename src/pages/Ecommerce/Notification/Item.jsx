import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

function Item({isRead = false}) {
    return (
        <NavLink>
            <div className={`${!isRead && 'bg-[#fff2ee]'} flex justify-between items-center gap-[2.2rem] p-[2rem] hover:bg-gray-100 transition-all`}>
                <div className='flex items-center gap-[1rem]'>
                    <img
                        className="w-[7.9rem] h-[7.9rem] "
                        src="https://via.placeholder.com/79x79"
                    />
                    <div className="">
                        <p className="text-black text-[1.6rem] font-normal">
                            Giao kiện hàng thành công
                        </p>
                        <p className="text-[1.4rem] mb-[1rem] mt-[.6rem]">
                            Kiện hàng <b>SPXVN039729777439</b> của đơn hàng <b>2309233WKH6BQV</b> đã
                            giao thành công đến bạn.
                        </p>
                        <p className="text-rose-600 text-opacity-70 font-medium text-[1.4rem]">
                            {new Date().toLocaleString()}
                        </p>
                    </div>
                </div>
                <Button className='detail-btn'>Xem chi tiết</Button>
            </div>
        </NavLink>
    );
}

export default Item;
