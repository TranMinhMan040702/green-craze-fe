import { Card, Table } from 'antd';
const baseColumns = [
    {
        title: 'Id',
        dataIndex: 'id',
        sorter: true,
        width: 50,
    },
    {
        title: 'Ngày đặt',
        dataIndex: 'createdAt',
        sorter: true,
    },
    {
        title: 'Mã đơn',
        dataIndex: 'code',
        sorter: true,
    },
    {
        title: 'Phương thức',
        dataIndex: 'paymentMethod',
        sorter: true,
    },
    {
        title: 'Thanh toán',
        dataIndex: 'paymentStatus',
        sorter: true,
    },
    {
        title: 'Tổng tiền',
        dataIndex: 'totalAmount',
        sorter: true,
    },
];
function StatisticOrderLatest() {
    return (
        <Card bordered={false} className="card-container h-[330px]">
            <div className="flex items-center justify-between mb-[2rem]">
                <h5 className="font-medium text-center text-[2rem]">Các đơn hàng mới nhất</h5>
                <span className="text-[#3ea4ff] cursor-pointer">Xem thêm</span>
            </div>
            <Table pagination={false} columns={baseColumns} dataSource={null} />
        </Card>
    );
}

export default StatisticOrderLatest;
