import { faEdit, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, Table, Tag } from 'antd';
import { useState } from 'react';
import config from '../../../config';
import ConfirmPrompt from '../../../layouts/Admin/components/ConfirmPrompt';
import CategoryDetail from './CategoryDetail';
import { useNavigate } from 'react-router-dom';

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
        title: 'Tên danh mục',
        dataIndex: 'name',
        sorter: {
            compare: (a, b) => a.name.localeCompare(b.name),
            multiple: 3,
        },
        ellipsis: true,
        width: 200,
    },
    {
        title: 'Slug',
        dataIndex: 'slug',
        sorter: {
            compare: (a, b) => a.slug.localeCompare(b.slug),
            multiple: 2,
        },
    },
    {
        title: 'Hình đại diện',
        dataIndex: 'image',
    },
    {
        title: 'Tên danh mục cha',
        dataIndex: 'parentName',
        sorter: {
            compare: (a, b) => a.parentName.localeCompare(b.parentName),
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
            name: 'Ly nhựa',
            slug: 'ly-nhua',
            image: (
                <img
                    className="w-20 h-20 rounded-xl"
                    src="https://dummyimage.com/138x100.png/dddddd/000000"
                />
            ),
            parentName: <span className="italic">không có</span>,
            status: (
                <Tag className="w-fit uppercase" color="green">
                    Đã kích hoạt
                </Tag>
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
                        onClick={() => navigate(`${config.routes.admin.category_update}/1`)}
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
            name: 'Hộp giấy',
            slug: 'hop-giay',
            image: (
                <img
                    className="w-20 h-20 rounded-xl"
                    src="https://dummyimage.com/138x100.png/dddddd/000000"
                />
            ),
            parentName: <span className="italic">không có</span>,
            status: (
                <Tag className="w-fit uppercase" color="green">
                    Đã kích hoạt
                </Tag>
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
                        onClick={() => navigate(`${config.routes.admin.category_update}/2`)}
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
            <CategoryDetail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} />
            <ConfirmPrompt
                content="Bạn có muốn vô hiệu hoá danh mục này ?"
                isDisableOpen={isDisableOpen}
                setIsDisableOpen={setIsDisableOpen}
            />
        </div>
    );
}

export default Data;
