import { Card, Image, Tag } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import images from '../../../assets/images';

function StatisticSale() {
    return (
        <Card bordered={false} className="card-container min-h-[340px]">
            <div className="flex items-center justify-between mb-[2rem]">
                <h5 className="font-medium text-center text-[2rem]">Đợi Sale hiện tại</h5>
            </div>
            <div>
                <Image
                    className="object-fill rounded-[5px] shadow-md"
                    width={300}
                    height={150}
                    src={images.banner.slide2}
                />
                <div className="flex flex-col items-center">
                    <h3 className="text-[1.6rem] font-medium">Sale lễ 30/4</h3>
                    <div className="w-full flex justify-around text-[1.4rem]">
                        <span>Bắt đầu: 29/04/2023</span>
                        <span>Kết thúc: 02/05/2023</span>
                    </div>
                    <Tag
                        bordered={false}
                        color="red"
                        className="w-full py-[0.5rem] text-center text-[1.8rem]"
                    >
                        <ArrowDownOutlined />
                        10%
                    </Tag>
                </div>
            </div>
        </Card>
    );
}

export default StatisticSale;
