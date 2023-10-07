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
        property: 'Tên phương thức',
        value: 'Paypal',
    },
    {
        key: '5',
        property: 'Mã',
        value: 'PAYPAL',
    },
    {
        key: '6',
        property: 'Ảnh',
        value: (
            <img
                className="w-20 h-20 rounded-xl"
                src="https://dummyimage.com/138x100.png/dddddd/000000"
            />
        ),
    },
    {
        key: '7',
        property: 'Trạng thái',
        value: (
            <Tag className="w-fit uppercase" color="blue">
                Có hiệu lực
            </Tag>
        ),
    },
];
function PaymentMethodDetail({ isDetailOpen, setIsDetailOpen }) {
    return (
        <Detail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} rawData={rawData} />
    );
}

export default PaymentMethodDetail;
