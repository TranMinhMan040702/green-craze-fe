import Images from './Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import PriceVariant from './PriceVariant';
import { useState } from 'react';
import { Button } from 'antd';

function Information() {
    const [count, setCount] = useState(1);
    const increaseCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        setCount(count > 1 ? count - 1 : count);
    };

    return (
        <div className="infor-product grid grid-cols-12">
            <div className="col-span-5 max-lg:col-span-12">
                <Images />
            </div>
            <div className="col-span-7 max-lg:col-span-12 ml-[2rem]">
                <h2 className="text-[2.8rem]">Hộp giấy kraft 1000ml nắp gài chéo</h2>
                <div className="flex items-center text-[1.4rem]">
                    <div className="pr-[1rem] mr-[1rem] border-r-[1px]">
                        <span className="mr-[0.5rem]">SKU:</span>
                        <span className="star-color">UPC335-1</span>
                    </div>
                    <div className="pr-[1rem] mr-[1rem] border-r-[1px]">
                        <span className="mr-[0.5rem] star-color">23773</span>
                        <span>lượt xem</span>
                    </div>
                    <div className="pr-[1rem] mr-[1rem]">
                        <span className="mr-[0.5rem] star-color">628</span>
                        <span>đã bán</span>
                    </div>
                </div>
                <div className="text-[1.6rem] my-[2rem]">
                    <div className="star-color">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="flex items-center">
                        <div className="pr-[1rem] mr-[1rem] border-r-[1px]">
                            <span className="mr-[0.5rem]">Thương hiệu:</span>
                            <span className="primary-color">Đang cập nhật</span>
                        </div>
                        <div className="pr-[1rem] mr-[1rem]">
                            <span className="mr-[0.5rem]">Tình trạng:</span>
                            <span className="primary-color">Còn hàng</span>
                        </div>
                    </div>
                    <div className="mt-[3rem]">
                        <span>Mua càng nhiều, giá càng rẻ:</span>
                        <PriceVariant />
                    </div>
                </div>
                <div className="border-t-[1px] pt-[1.4rem]">
                    <span className="text-[1.6rem]">Số lượng:</span>
                    <div className="w-[124px] h-[30px] mt-[1.4rem] flex justify-between items-center text-[1.6rem] text-center border-[1px] rounded-[5px]">
                        <div
                            className="h-full leading-[1.7] px-[1.2rem] border-r-[1px] cursor-pointer"
                            onClick={decreaseCount}
                        >
                            -
                        </div>
                        <div>{count}</div>
                        <div
                            className="h-full leading-[1.7] px-[1.2rem] border-l-[1px] cursor-pointer"
                            onClick={increaseCount}
                        >
                            +
                        </div>
                    </div>
                </div>
                <div className="option mt-[2.6rem] max-sm:mt-[2rem] flex max-sm:flex-col max-sm:items-start items-center">
                    <Button className="add-product-like max-sm:mb-[1rem]" block>
                        Thêm vào danh sách yêu thích
                    </Button>
                    <Button className="add-to-cart" block>
                        Thêm vào giỏ hàng
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Information;
