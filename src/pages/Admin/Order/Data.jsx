import { faEdit, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, Table, Tag } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../../config';
import ConfirmPrompt from '../../../layouts/Admin/components/ConfirmPrompt';
import OrderDetail from './OrderDetail';

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
        title: 'Ngày đặt hàng',
        dataIndex: 'createdAt',
        sorter: {
            compare: (a, b) => a.name.localeCompare(b.name),
            multiple: 3,
        },
    },
    {
        title: 'Mã đơn hàng',
        dataIndex: 'code',
        sorter: {
            compare: (a, b) => a.name.localeCompare(b.name),
            multiple: 3,
        },
    },
    {
        title: 'Người đặt',
        dataIndex: 'user',
        sorter: {
            compare: (a, b) => a.name.localeCompare(b.name),
            multiple: 3,
        },
    },
    {
        title: 'Thông tin nhận hàng',
        dataIndex: 'address',
        sorter: {
            compare: (a, b) => a.name.localeCompare(b.name),
            multiple: 3,
        },
    },
    {
        title: 'Tổng tiền',
        dataIndex: 'totalAmount',
        sorter: {
            compare: (a, b) => a.name.localeCompare(b.name),
            multiple: 3,
        },
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        sorter: {
            compare: (a, b) => a?.status?.props?.children.localeCompare(b?.status?.props?.children),
            multiple: 1,
        },
    },
    {
        title: 'Thao tác',
        dataIndex: 'action',
    },
];

function Data() {
    const navigate = useNavigate();
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [isDisableOpen, setIsDisableOpen] = useState(false);
    const [rawData, setRawData] = useState([
        {
            key: '1',
            id: '1',
            createdAt: '23:20:36 02/05/2022',
            code: '36987-166',
            user: 'Danila Treat',
            address: (
                <div>
                    <p>do mixi</p>
                    <p>0909998877</p>
                    <p className="opacity-[0.6]">
                        Streaming house Phường 14, Quận 10 TP Hồ Chí Minh
                    </p>
                </div>
            ),
            totalAmount: <div className="font-bold">700.000 ₫</div>,
            status: (
                <div className="flex flex-col gap-[1rem]">
                    <Tag className="w-fit uppercase" color="blue">
                        Đang xử lý
                    </Tag>
                    <Tag className="w-fit uppercase" color="green">
                        Đang giao
                    </Tag>
                </div>
            ),
            action: (
                <div className="action-btn flex gap-3">
                    <Button
                        className="text-blue-500 border border-blue-500"
                        onClick={() => setIsDetailOpen(true)}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    <Button
                        className="text-green-500 border border-green-500"
                        onClick={() => navigate(`${config.routes.admin.order_update}/1`)}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                        className="text-red-500 border border-red-500"
                        onClick={() => setIsDisableOpen(true)}
                    >
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </Button>
                </div>
            ),
        },
        {
            key: '2',
            id: '2',
            createdAt: '23:20:36 02/05/2022',
            code: '36987-166',
            user: 'Danila Treat',
            address: (
                <div>
                    <p>do mixi</p>
                    <p>0909998877</p>
                    <p className="opacity-[0.6]">
                        Streaming house Phường 14, Quận 10 TP Hồ Chí Minh
                    </p>
                </div>
            ),
            totalAmount: <div className="font-bold">700.000 ₫</div>,
            status: (
                <div className="flex flex-col gap-[1rem]">
                    <Tag className="w-fit uppercase" color="blue">
                        Đang xử lý
                    </Tag>
                    <Tag className="w-fit uppercase" color="green">
                        Đang giao
                    </Tag>
                </div>
            ),
            action: (
                <div className="action-btn flex gap-3">
                    <Button
                        className="text-blue-500 border border-blue-500"
                        onClick={() => setIsDetailOpen(true)}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    <Button
                        className="text-green-500 border border-green-500"
                        onClick={() => navigate(`${config.routes.admin.order_update}/1`)}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                        className="text-red-500 border border-red-500"
                        onClick={() => setIsDisableOpen(true)}
                    >
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </Button>
                </div>
            ),
        },
    ]);
    const [data, setData] = useState(rawData);
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            name: record.name,
        }),
    };
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
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={baseColumns}
                dataSource={data}
                pagination={{
                    defaultPageSize: 10,
                    showSizeChanger: true,
                }}
            />
            <OrderDetail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} />
            <ConfirmPrompt
                content="Bạn có muốn vô hiệu hoá đơn hàng này?"
                isDisableOpen={isDisableOpen}
                setIsDisableOpen={setIsDisableOpen}
            />
        </div>
    );
}

export default Data;
