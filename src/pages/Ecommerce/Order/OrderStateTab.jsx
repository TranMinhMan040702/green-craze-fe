import React from 'react';
import { Tabs } from 'antd';
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: 'all',
        label: 'Tất cả',
    },
    {
        key: 'no-processing',
        label: 'Chưa xử lý',
    },
    {
        key: 'processing',
        label: 'Đang xử lý',
    },
    {
        key: 'on-the-way',
        label: 'Đang giao',
    },
    {
        key: 'delivered',
        label: 'Hoàn thành',
    },
    {
        key: 'cancelled',
        label: 'Đã huỷ',
    },
];

function OrderStateTab() {
    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
}

export default OrderStateTab;
