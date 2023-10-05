import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faReply, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, Rate, Table, Tag } from 'antd';
import { useState } from 'react';
import ReviewDetail from './ReviewDetail';
import Reply from './Reply';
import ConfirmPrompt from '../components/ConfirmPrompt'
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
    {
        title: 'Tóm lược nội dung',
        dataIndex: 'content',
        sorter: {
            compare: (a, b) => a.content.localeCompare(b.content),
            multiple: 1,
        },
        width: 200,
        ellipsis: true,
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
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [isReplyOpen, setIsReplyOpen] = useState(false);
    const [isDisableOpen, setIsDisableOpen] = useState(false);
    const [rawData, setRawData] = useState([
        {
            key: '1',
            id: '1',
            createdAt: new Date().toLocaleString(),
            name: 'John Brown',
            product: 'Ly giấy',
            star: <Rate className="text-2xl" disabled defaultValue={4} allowHalf />,
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere felis sed justo finibus, eget maximus diam rhoncu',
            status: <Tag color="green">Đã hiển thị</Tag>,
            action: (
                <div className="flex gap-3">
                    <Button
                        className="text-blue-500 border border-blue-500"
                        onClick={() => setIsDetailOpen(true)}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    <Button
                        className="text-green-500 border border-green-500"
                        onClick={() => setIsReplyOpen(true)}
                    >
                        <FontAwesomeIcon icon={faReply} />
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
            createdAt: new Date().toLocaleString(),
            name: 'NMS',
            product: 'Ly giấy',
            star: <Rate className="text-2xl" disabled defaultValue={2.5} allowHalf />,
            content:
                '123 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere felis sed justo finibus, eget maximus diam rhoncu',
            status: <Tag color="red">Đã ẩn</Tag>,
            action: (
                <div className="flex gap-3">
                    <Button
                        className="text-blue-500 border border-blue-500"
                        onClick={() => setIsDetailOpen(true)}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    <Button
                        className="text-green-500 border border-green-500"
                        onClick={() => setIsReplyOpen(true)}
                    >
                        <FontAwesomeIcon icon={faReply} />
                    </Button>
                    <Button
                        className="text-green-500 border border-green-500"
                        onClick={() => setIsDisableOpen(true)}
                    >
                        <FontAwesomeIcon icon={faEye} />
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
                columns={baseColumns}
                dataSource={data}
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                pagination={{
                    defaultPageSize: 10,
                    showSizeChanger: true,
                }}
            />
            <ReviewDetail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} />
            <Reply isReplyOpen={isReplyOpen} setIsReplyOpen={setIsReplyOpen} />
            <ConfirmPrompt
                content="Bạn có muốn ấn đánh giá này ?"
                isDisableOpen={isDisableOpen}
                setIsDisableOpen={setIsDisableOpen}
            />
        </div>
    );
}

export default Data;
