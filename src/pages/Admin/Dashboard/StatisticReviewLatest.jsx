import { Card, Table } from 'antd';
const baseColumns = [
    {
        title: 'Id',
        dataIndex: 'id',
        sorter: {
            compare: (a, b) => a.id.localeCompare(b.id),
            multiple: 4,
        },
        width: 50,
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'createdAt',
        sorter: {
            compare: (a, b) => a.createdAt.localeCompare(b.createdAt),
            multiple: 3,
        },
    },
    {
        title: 'Người dùng',
        dataIndex: 'name',
        sorter: {
            compare: (a, b) => a.name.localeCompare(b.name),
            multiple: 2,
        },
    },
    {
        title: 'Sản phẩm',
        dataIndex: 'product',
        sorter: {
            compare: (a, b) => a.product.localeCompare(b.product),
            multiple: 1,
        },
    },
    {
        title: 'Số sao',
        dataIndex: 'star',
        sorter: {
            compare: (a, b) => a?.star?.props?.defaultValue - b?.star?.props?.defaultValue,
            multiple: 1,
        },
    },
];
function StatisticReviewLatest() {
    return (
        <Card bordered={false} className="card-container h-[330px]">
            <div className="flex items-center justify-between mb-[2rem]">
                <h5 className="font-medium text-center text-[2rem]">Các đánh giá mới nhất</h5>
                <span className="text-[#3ea4ff] cursor-pointer">Xem thêm</span>
            </div>
            <Table pagination={false} columns={baseColumns} dataSource={null} />
        </Card>
    );
}

export default StatisticReviewLatest;
