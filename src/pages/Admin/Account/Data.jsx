import { faEdit, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, Table, Tag } from 'antd';
import { useState } from 'react';
import ConfirmPrompt from '../../../layouts/Admin/components/ConfirmPrompt';
import Edit from './Edit';
import AccountDetail from './AccountDetail';

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
        title: 'Email',
        dataIndex: 'email',
        sorter: {
            compare: (a, b) => a.email.localeCompare(b.email),
            multiple: 3,
        },
        ellipsis: true,
        width: 200,
    },
    {
        title: 'Họ và tên',
        dataIndex: 'fullname',
        sorter: {
            compare: (a, b) => a.fullname.localeCompare(b.fullname),
            multiple: 2,
        },
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        sorter: {
            compare: (a, b) => a.phone.localeCompare(b.phone),
            multiple: 1,
        },
    },
    {
        title: 'Giới tính',
        dataIndex: 'gender',
        sorter: {
            compare: (a, b) => a.gender.localeCompare(b.gender),
            multiple: 1,
        },
    },
    {
        title: 'Ảnh đại diện',
        dataIndex: 'avatar',
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
        title: 'Vai trò',
        dataIndex: 'role',
    },
    {
        title: 'Thao tác',
        dataIndex: 'action',
    },
];

function Data() {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [isDisableOpen, setIsDisableOpen] = useState(false);
    const [rawData, setRawData] = useState([
        {
            key: '1',
            id: '1',
            email: 'nguyenminhson102002@gmail.com',
            fullname: 'Nguyen Minh Son',
            phone: '0354964840',
            gender: 'Nam',
            avatar: (
                <img
                    className="w-20 h-20 rounded-xl"
                    src="https://dummyimage.com/138x100.png/dddddd/000000"
                />
            ),
            status: (
                <Tag className="w-fit uppercase" color="green">
                    Đã kích hoạt
                </Tag>
            ),
            role: (
                <div className="flex flex-col gap-[1rem]">
                    <Tag className="w-fit uppercase">Quản trị viên</Tag>
                    <Tag className="w-fit uppercase">Người dùng</Tag>
                </div>
            ),
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
                        onClick={() => setIsEditOpen(true)}
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
            email: 'nguyenminhson102002@gmail.com',
            fullname: 'Nguyen Minh Son',
            phone: '0354964840',
            gender: 'Nam',
            avatar: (
                <img
                    className="w-20 h-20 rounded-xl"
                    src="https://dummyimage.com/138x100.png/dddddd/000000"
                />
            ),
            status: (
                <Tag className="w-fit uppercase" color="red">
                    Chưa kích hoạt
                </Tag>
            ),
            role: (
                <div className="flex flex-col gap-[1rem] uppercase">
                    <Tag className="w-fit">Quản trị viên</Tag>
                </div>
            ),
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
                        onClick={() => setIsEditOpen(true)}
                    >
                        <FontAwesomeIcon icon={faEdit} />
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
            <Edit isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} />
            <AccountDetail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} />
            <ConfirmPrompt
                content="Bạn có muốn vô hiệu hoá tài khoản này ?"
                isDisableOpen={isDisableOpen}
                setIsDisableOpen={setIsDisableOpen}
            />
        </div>
    );
}

export default Data;
