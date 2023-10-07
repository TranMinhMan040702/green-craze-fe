import { Tag } from 'antd';
import Detail from '../../../layouts/Admin/components/Detail';

const rawData = [
    {
        key: '1',
        property: 'ID',
        value: '1',
    },
    {
        key: '2',
        property: 'Ngày tạo',
        value: new Date().toLocaleString(),
    },
    {
        key: '3',
        property: 'Ngày cập nhật',
        value: new Date().toLocaleString(),
    },
    {
        key: '4',
        property: 'Tên khuyến mãi',
        value: 'Khuyến mãi tháng 10',
    },
    {
        key: '5',
        property: 'Ngày bắt đầu khuyến mãi',
        value: new Date().toLocaleString(),
    },
    {
        key: '6',
        property: 'Ngày kết thúc khuyến mãi',
        value: new Date().toLocaleString(),
    },
    {
        key: '7',
        property: 'Phần trăm giảm giá',
        value: '10%',
    },
    {
        key: '8',
        property: 'Trạng thái khuyến mãi',
        value: (
            <Tag className="w-fit uppercase" color="blue">
                Có hiệu lực
            </Tag>
        ),
    },
    {
        key: '9',
        property: 'Số sản phẩm',
        value: '10 Sản phẩm',
    },
];
function SaleDetail({ isDetailOpen, setIsDetailOpen }) {
    return (
        <Detail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} rawData={rawData} />
    );
}

export default SaleDetail;
