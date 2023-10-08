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
        property: 'Mã đơn hàng',
        value: '1',
    },
    {
        key: '5',
        property: 'Ngày hoàn tất giao dịch',
        value: new Date().toLocaleString(),
    },
    {
        key: '6',
        property: 'Ngày thanh toán',
        value: new Date().toLocaleString(),
    },
    {
        key: '7',
        property: 'Phương thức thanh toán',
        value: 'PayPal',
    },
    {
        key: '8',
        property: 'Tổng tiền',
        value: '123.000đ',
    },
    {
        key: '9',
        property: 'Trạng thái thanh toán',
        value: (
            <Tag className="w-fit uppercase" color="green">
                Đã thanh toán
            </Tag>
        ),
    },
    {
        key: '10',
        property: 'Trạng thái giao dịch',
        value: (
            <Tag className="w-fit uppercase" color="green">
                Đã hoàn tất
            </Tag>
        ),
    },
    {
        key: '11',
        property: 'PayPal ID',
        value: '#1234bh2b34h2b34jn34j',
    },
];

function TransactionDetail({ isDetailOpen, setIsDetailOpen }) {
    return (
        <Detail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} rawData={rawData} />
    );
}

export default TransactionDetail;
