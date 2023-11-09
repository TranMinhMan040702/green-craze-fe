import { Card } from 'antd';
import images from '../../../assets/images';

function StatisticTransaction() {
    return (
        <Card bordered={false} className="card-container min-h-[345px]">
            <div className="flex items-center justify-between mb-[2rem]">
                <h5 className="font-medium text-center text-[2rem]">Giao dịch mới nhất</h5>
                <span className="text-[#3ea4ff] cursor-pointer">Xem thêm</span>
            </div>
            <div className="flex items-center justify-between mt-[2rem]">
                <div className="flex items-center">
                    <div className="w-[28px] h-[28px] mr-[1.5rem]">
                        <img className="rounded-full" src={images.user} alt="bell" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[1.6rem] font-medium text-[--text-color]">
                            Tran Minh Man
                        </span>
                        <span className="text-[1.2rem]">Jan 10, 2023 - 06:02 AM</span>
                    </div>
                </div>
                <div className="text-[1.7rem] text-[--primary-color] font-bold">100.000 đ</div>
            </div>

            <div className="flex items-center justify-between mt-[2rem]">
                <div className="flex items-center">
                    <div className="w-[28px] h-[28px] mr-[1.5rem]">
                        <img className="rounded-full" src={images.user} alt="bell" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[1.6rem] font-medium text-[--text-color]">
                            Tran Minh Man
                        </span>
                        <span className="text-[1.2rem]">Jan 10, 2023 - 06:02 AM</span>
                    </div>
                </div>
                <div className="text-[1.7rem] text-[--primary-color] font-bold">100.000 đ</div>
            </div>
            <div className="flex items-center justify-between mt-[2rem]">
                <div className="flex items-center">
                    <div className="w-[28px] h-[28px] mr-[1.5rem]">
                        <img className="rounded-full" src={images.user} alt="bell" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[1.6rem] font-medium text-[--text-color]">
                            Tran Minh Man
                        </span>
                        <span className="text-[1.2rem]">Jan 10, 2023 - 06:02 AM</span>
                    </div>
                </div>
                <div className="text-[1.7rem] text-[--primary-color] font-bold">100.000 đ</div>
            </div>
            <div className="flex items-center justify-between mt-[2rem]">
                <div className="flex items-center">
                    <div className="w-[28px] h-[28px] mr-[1.5rem]">
                        <img className="rounded-full" src={images.user} alt="bell" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[1.6rem] font-medium text-[--text-color]">
                            Tran Minh Man
                        </span>
                        <span className="text-[1.2rem]">Jan 10, 2023 - 06:02 AM</span>
                    </div>
                </div>
                <div className="text-[1.7rem] text-[--primary-color] font-bold">100.000 đ</div>
            </div>
        </Card>
    );
}

export default StatisticTransaction;
