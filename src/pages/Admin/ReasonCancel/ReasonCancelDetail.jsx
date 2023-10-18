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
        property: 'Tên lý do hủy đơn hàng',
        value: 'Nhân viên làm sai',
    },
    {
        key: '5',
        property: 'Ghi chú lý do hủy đơn hàng',
        value: '',
    },
    {
        key: '6',
        property: 'Trạng thái',
        value: (
            <Tag className="w-fit uppercase" color="green">
                Có hiệu lực
            </Tag>
        ),
    },
];

function ReasonCancelDetail({ isDetailOpen, setIsDetailOpen }) {
    return (
        <Detail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} rawData={rawData} />
    );
}

export default ReasonCancelDetail;
