import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';

function Item({ isLastItem = false }) {
    return (
        <div
            className={`flex justify-between ${
                isLastItem || 'border-b-[0.1rem] border-b-gray-300'
            } pt-[3.7rem] pb-[2.2rem] mx-[2.1rem] items-center`}
        >
            <div className="text-[1.6rem] flex items-center gap-[2.5rem]">
                <p className="text-red-400 hover:text-red-700 cursor-pointer text-[1.6rem] h-[4rem] mt-[1rem] ">
                    <FontAwesomeIcon icon={faTrash} className='mr-3'/>
                    Xoá
                </p>
                <div className="flex justify-center items-center gap-[2.2rem]">
                    <img className="w-[7.9rem] h-[7.9rem] " src="https://via.placeholder.com/79x79" />
                    <div className="text-black text-[15px] font-normal font-['Roboto']">
                        Ly giấy Kraft 360ml - 12oz ripple wall
                    </div>
                </div>
            </div>
            <div className="text-right">
                <Button
                    icon={<FontAwesomeIcon icon={faCartPlus} />}
                    className="text-blue-600 text-[1.6rem] h-[4rem] mt-[1rem] "
                >
                    Thêm vào giỏ hàng
                </Button>
            </div>
        </div>
    );
}

export default Item;
