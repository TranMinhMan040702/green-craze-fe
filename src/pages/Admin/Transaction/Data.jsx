import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, Table } from 'antd';
import { useState } from 'react';
import TransactionDetail from './TransactionDetail';

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
        title: 'Mã đơn hàng',
        dataIndex: 'order_id',
        sorter: {
            compare: (a, b) => a.order_id.localeCompare(b.order_id),
            multiple: 4,
        },
    },
    {
        title: 'Ngày hoàn tất',
        dataIndex: 'completeAt',
        sorter: {
            compare: (a, b) => a.completeAt.localeCompare(b.completeAt),
            multiple: 3,
        },
    },
    {
        title: 'Ngày thanh toán',
        dataIndex: 'paidAt',
        sorter: {
            compare: (a, b) => a.paidAt.localeCompare(b.paidAt),
            multiple: 2,
        },
    },
    {
        title: 'Phương thức thanh toán',
        dataIndex: 'payment_method',
        sorter: {
            compare: (a, b) => a.payment_method.localeCompare(b.payment_method),
            multiple: 1,
        },
    },
    {
        title: 'Tổng tiền',
        dataIndex: 'total_pay',
        sorter: {
            compare: (a, b) => a.total_pay.localCompare(b.total_pay),
            multiple: 1,
        },
    },
    {
        title: 'Thao tác',
        dataIndex: 'action',
    },
];

function Data() {
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [rawData, setRawData] = useState([
        {
            key: '1',
            id: '1',
            order_id: '1',
            completeAt: new Date().toLocaleString(),
            paidAt: new Date().toLocaleString(),
            payment_method: 'PayPal',
            total_pay: '123.000đ',
            action: (
                <div className="action-btn flex gap-3">
                    <Button
                        className="text-blue-500 border border-blue-500"
                        onClick={() => setIsDetailOpen(true)}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </div>
            ),
        },
        {
            key: '2',
            id: '2',
            order_id: '2',
            completeAt: new Date().toLocaleString(),
            paidAt: new Date().toLocaleString(),
            payment_method: 'CoD',
            total_pay: '1.100.000đ',
            action: (
                <div className="action-btn flex gap-3">
                    <Button
                        className="text-blue-500 border border-blue-500"
                        onClick={() => setIsDetailOpen(true)}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </div>
            ),
        },
    ]);
    const [data, setData] = useState(rawData);
    const onSearch = (value) => {
        const dt = rawData;
        const filterTable = dt.filter((o) =>
            Object.keys(o).some((k) => String(o[k]).toLowerCase().includes(value.toLowerCase())),
        );

        setData(filterTable);
    };

    return (
        <div>
            <div className="search-container p-4 bg-white mb-3 flex items-center rounded-lg">
                <Input.Search
                    className="xl:w-1/4 md:w-1/2"
                    allowClear
                    enterButton
                    placeholder="Nhập từ khoá tìm kiếm"
                    onSearch={onSearch}
                />
            </div>
            <Table
                scroll={{
                    x: 'max-content'
                }}
                columns={baseColumns}
                dataSource={data}
                pagination={{
                    defaultPageSize: 10,
                    showSizeChanger: true,
                }}
            />
            <TransactionDetail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} />
        </div>
    );
}

export default Data;
