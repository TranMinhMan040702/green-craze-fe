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
        value: '36987-166',
    },
    {
        key: '5',
        property: 'Trạng thái',
        value: (
            <Tag className="w-fit uppercase" color="green">
                Đang giao hàng
            </Tag>
        ),
    },
    {
        key: '6',
        property: 'Lý do hủy đơn hàng',
        value: '',
    },
    {
        key: '7',
        property: 'Ghi chú đơn hàng',
        value: '',
    },
    {
        key: '8',
        property: 'Người đặt',
        value: 'Danila Treat',
    },
    {
        key: '9',
        property: 'Thông tin nhận hàng',
        value: (
            <div>
                <p>do mixi</p>
                <p>0909998877</p>
                <p className="opacity-[0.6]">Streaming house Phường 14, Quận 10 TP Hồ Chí Minh</p>
            </div>
        ),
    },
    {
        key: '10',
        property: 'Tổng tiền',
        value: <div className="font-bold">600.000 ₫</div>,
    },
    {
        key: '11',
        property: 'Thuế',
        value: '10%',
    },
    {
        key: '12',
        property: 'Phí vận chuyển',
        value: <div className="font-bold">40.000 ₫</div>,
    },
    {
        key: '13',
        property: 'Tổng phí phải trả',
        value: <div className="font-bold">700.000 ₫</div>,
    },
    {
        key: '14',
        property: 'Hình thức thanh toán',
        value: 'Paypal',
    },
    {
        key: '15',
        property: 'Trạng thái thanh toán',
        value: (
            <Tag className="w-fit uppercase" color="green">
                Đã thanh toán
            </Tag>
        ),
    },
];

function UnitDetail({ isDetailOpen, setIsDetailOpen }) {
    return (
        <Detail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} rawData={rawData} />
    );
}

export default UnitDetail;
