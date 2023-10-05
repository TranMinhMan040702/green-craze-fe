import { Tag } from 'antd';
import Detail from '../components/Detail';

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
        property: 'Tên',
        value: 'Vận chuyển nhanh',
    },
    {
        key: '5',
        property: 'Giá',
        value: '10000đ',
    },
    {
        key: '6',
        property: 'Mô tả',
        value: 'Mô tả',
    },
    {
        key: '7',
        property: 'Ảnh',
        value: (
            <img
                className="w-20 h-20 rounded-xl"
                src="https://dummyimage.com/138x100.png/dddddd/000000"
            />
        ),
    },
    {
        key: '8',
        property: 'Trạng thái',
        value: (
            <Tag className="w-fit uppercase" color="green">
                Đã kích hoạt
            </Tag>
        ),
    },
];

function DeliveryDetail({ isDetailOpen, setIsDetailOpen }) {
    return (
        <Detail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} rawData={rawData} />
    );
}

export default DeliveryDetail;
