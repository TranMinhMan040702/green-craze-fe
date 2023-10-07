import { faEdit, faEye } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, Table, Tag } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../../config';
import ConfirmPrompt from '../../../layouts/Admin/components/ConfirmPrompt';
import SaleDetail from './SaleDetail';

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
        ellipsis: true,
        width: 200,
    },
    {
        title: 'Tên khuyến mãi',
        dataIndex: 'salename',
        sorter: {
            compare: (a, b) => a.salename.localeCompare(b.salename),
            multiple: 2,
        },
    },
    {
        title: 'Ngày bắt đầu',
        dataIndex: 'starDate',
        sorter: {
            compare: (a, b) => a.starDate.localeCompare(b.starDate),
            multiple: 1,
        },
    },
    {
        title: 'Ngày kết thúc',
        dataIndex: 'endDate',
        sorter: {
            compare: (a, b) => a.endDate.localeCompare(b.endDate),
            multiple: 1,
        },
    },
    {
        title: 'Phần trăm giảm giá',
        dataIndex: 'percent',
        sorter: {
            compare: (a, b) => a.percent.localeCompare(b.percent),
            multiple: 1,
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
        title: 'Số sản phẩm',
        dataIndex: 'count',
        sorter: {
            compare: (a, b) => a.count.localeCompare(b.count),
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
    const [isDisableOpen, setIsDisableOpen] = useState(false);
    const navigate = useNavigate();
    const [rawData, setRawData] = useState([
        {
            key: '1',
            id: '1',
            createdAt: new Date().toLocaleString(),
            salename: 'Khuyến mãi tháng 10',
            starDate: new Date().toLocaleString(),
            endDate: new Date().toLocaleString(),
            percent: '10%',
            status: (
                <Tag className="w-fit uppercase" color="blue">
                    Có hiệu lực
                </Tag>
            ),
            count: '1 sản phẩm',
            action: (
                <div className="flex gap-3">
                    <Button
                        className="text-blue-500 border border-blue-500"
                        onClick={() => setIsDetailOpen(true)}
                    >
                        <FontAwesomeIcon icon={faEye} />
                    </Button>
                    <Button
                        className="text-green-500 border border-green-500"
                        onClick={() => navigate(`${config.routes.admin.sale_update}/1`)}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                        className="text-red-500 border border-red-500"
                        onClick={() => setIsDisableOpen(true)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </div>
            ),
        },
        {
            key: '2',
            id: '2',
            createdAt: new Date().toLocaleString(),
            salename: 'Khuyến mãi tháng 11',
            starDate: new Date().toLocaleString(),
            endDate: new Date().toLocaleString(),
            percent: '20%',
            status: (
                <Tag className="w-fit uppercase" color="red">
                    Vô hiệu lực
                </Tag>
            ),
            count: '6 sản phẩm',
            action: (
                <div className="flex gap-3">
                    <Button
                        className="text-blue-500 border border-blue-500"
                        onClick={() => setIsDetailOpen(true)}
                    >
                        <FontAwesomeIcon icon={faEye} />
                    </Button>
                    <Button
                        className="text-green-500 border border-green-500"
                        onClick={() => navigate(`${config.routes.admin.sale_update}/1`)}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                        className="text-red-500 border border-red-500"
                        onClick={() => setIsDisableOpen(true)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
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
            <div className="p-4 bg-white mb-3 flex items-center rounded-lg">
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
            <SaleDetail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} />
            <ConfirmPrompt
                content="Bạn có muốn ẩn đợt khuyến mãi này ?"
                isDisableOpen={isDisableOpen}
                setIsDisableOpen={setIsDisableOpen}
            />
        </div>
    );
}

export default Data;
