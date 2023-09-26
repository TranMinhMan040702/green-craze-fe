import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';

function Item({isLastItem = false}) {
    return (
        <div className={`${!isLastItem && 'border-b-[0.1rem]'} flex items-center justify-between gap-[2.2rem] mx-[2rem] py-[2.1rem] `}>
            <div className="flex gap-[2.2rem]"> 
                <img className="w-[7.9rem] h-[7.9rem] " src="https://via.placeholder.com/79x79" />
                <div className="">
                    <p className="text-black text-[1.5rem] font-normal">
                        Ly giấy Kraft 360ml - 12oz ripple wall
                    </p>
                    <p className="text-[1.2rem] mb-[1rem] mt-[.6rem]">x1 Lốc</p>
                    <p className="text-rose-600 text-opacity-70 font-medium text-[1.4rem]">
                        75.000đ
                    </p>
                </div>
            </div>
            <Button icon={<FontAwesomeIcon icon={faStar}/>} className='text-blue-500 border-blue-500'>Đánh giá</Button>
        </div>
    );
}

export default Item;
