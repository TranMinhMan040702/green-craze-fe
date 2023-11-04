import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import { numberFormatter } from '../../../utils/formatter';
import { ORDER_STATUS } from '../../../utils/constants';

function Item({ item, status, isLastItem = false }) {
    return (
        <div
            className={`${
                !isLastItem && 'border-b-[0.1rem]'
            } flex items-center justify-between gap-[2.2rem] mx-[2rem] py-[2.1rem] `}
        >
            <div className="flex gap-[2.2rem]">
                <img
                    className="w-[7.9rem] h-[7.9rem] border border-solid"
                    src={item?.productImage}
                />
                <div className="">
                    <p className="text-black text-[1.5rem] font-normal">{item?.productName}</p>
                    <p className="text-[1.2rem] mb-[1rem] mt-[.6rem]">
                        x{item?.quantity} {item?.productUnit}
                    </p>
                    <p className="text-rose-600 text-opacity-70 font-medium text-[1.4rem]">
                        {numberFormatter(item?.totalPrice)}
                    </p>
                </div>
            </div>
            {status === ORDER_STATUS.DELIVERED && (
                <Button
                    icon={<FontAwesomeIcon icon={faStar} />}
                    className="text-blue-500 border-blue-500"
                >
                    Đánh giá
                </Button>
            )}
        </div>
    );
}

export default Item;
