import { Button, Checkbox } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import RecommentProduct from '../../../layouts/Ecommerce/components/RecommentProduct';

function Filter() {
    return (
        <div className="filter max-lg:px-[3rem] p-[1rem] lg:border-r-[1px]">
            <div className="brand pt-[1.5rem] pb-[2.8rem] border-b-[1px]">
                <h3 className="text-[1.6rem] uppercase mb-[1.4rem]">Thương hiệu</h3>
                <div className="brand-list flex flex-col">
                    <Checkbox className="text-[1.6rem] mb-[1rem]">ABVINA</Checkbox>
                    <Checkbox className="text-[1.6rem] mb-[1rem]">GC Food</Checkbox>
                    <Checkbox className="text-[1.6rem] mb-[1rem]">KATA FARM</Checkbox>
                    <Checkbox className="text-[1.6rem] mb-[1rem]">KATA FARM HUB</Checkbox>
                    <Checkbox className="text-[1.6rem] mb-[1rem]">Mango King</Checkbox>
                </div>
                <div>
                    <Button className="text-[1.6rem] hover:bg-transparent" type="text">
                        Xem thêm
                        <FontAwesomeIcon
                            className="text-[1.4rem] ml-[0.5rem] mb-[0.1rem]"
                            icon={faChevronDown}
                        />
                    </Button>
                    {/* <Button className="text-[1.6rem] hover:bg-transparent" type="text">
                        Thu hồi
                        <FontAwesomeIcon
                            className="text-[1.4rem] ml-[0.5rem] mt-[0.1rem]"
                            icon={faChevronUp}
                        />
                    </Button> */}
                </div>
            </div>
            <div className="price pt-[1.5rem] pb-[2.8rem] border-b-[1px]">
                <h3 className="text-[1.6rem] uppercase mb-[1.4rem]">Mức giá</h3>
                <div className="price-list flex flex-col">
                    <Checkbox className="text-[1.6rem] mb-[1rem]">Giá dưới 100.000đ</Checkbox>
                    <Checkbox className="text-[1.6rem] mb-[1rem]">100.000đ - 200.000đ</Checkbox>
                    <Checkbox className="text-[1.6rem] mb-[1rem]">200.000đ - 300.000đ</Checkbox>
                    <Checkbox className="text-[1.6rem] mb-[1rem]">300.000đ - 500.000đ</Checkbox>
                    <Checkbox className="text-[1.6rem] mb-[1rem]">500.000đ - 1.000.000đ</Checkbox>
                </div>
            </div>
            <div className="category pt-[1.5rem] pb-[2.8rem]">
                <h3 className="text-[1.6rem] uppercase mb-[1.4rem]">Loại</h3>
                <div className="category-list flex flex-col">
                    <Checkbox className="text-[1.6rem] mb-[1rem]">Trái Cây Việt Nam</Checkbox>
                    <Checkbox className="text-[1.6rem] mb-[1rem]">Trái Cây Cắt Sẵn</Checkbox>
                    <Checkbox className="text-[1.6rem] mb-[1rem]">Trái Cây Hữu Cơ</Checkbox>
                    <Checkbox className="text-[1.6rem] mb-[1rem]">
                        Trái Cây Hữu Cơ, An Toàn
                    </Checkbox>
                    <Checkbox className="text-[1.6rem] mb-[1rem]">MTrái Cây Nhập Khẩu</Checkbox>
                </div>
                <div>
                    <Button className="text-[1.6rem] hover:bg-transparent" type="text">
                        Xem thêm
                        <FontAwesomeIcon
                            className="text-[1.4rem] ml-[0.5rem] mb-[0.1rem]"
                            icon={faChevronDown}
                        />
                    </Button>
                    {/* <Button className="text-[1.6rem] hover:bg-transparent" type="text">
                        Thu hồi
                        <FontAwesomeIcon
                            className="text-[1.4rem] ml-[0.5rem] mt-[0.1rem]"
                            icon={faChevronUp}
                        />
                    </Button> */}
                </div>
            </div>
            <RecommentProduct />
        </div>
    );
}

export default Filter;
