import { faEdit, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../../config';
import ConfirmPrompt from '../../../layouts/Admin/components/ConfirmPrompt';
import BrandDetail from './BrandDetail';
import { useDeleteBrand, useGetListBrand } from '../../../hooks/api';

function transformData(dt, navigate, setIsDetailOpen, setIsDisableOpen) {
    return dt?.map((item) => {
        return {
            key: item.id,
            id: item.id,
            name: item.name,
            code: item.code,
            image: <img className="w-20 h-20 rounded-xl" src={item.image} />,
            status: (
                <Tag className="w-fit uppercase" color={item?.status ? 'green' : 'red'}>
                    {item?.status ? 'Đã kích hoạt' : 'Đã vô hiệu hóa'}
                </Tag>
            ),
            action: (
                <div className="action-btn flex gap-3">
                    <Button
                        className="text-blue-500 border border-blue-500"
                        onClick={() => setIsDetailOpen({ id: item.id, isOpen: true })}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    <Button
                        className="text-green-500 border border-green-500"
                        onClick={() => navigate(`${config.routes.admin.brand_update}/${item.id}`)}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                        className="text-red-500 border border-red-500"
                        onClick={() => setIsDisableOpen({ id: item.id, isOpen: true })}
                    >
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </Button>
                </div>
            ),
        };
    });
}

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
        title: 'Tên thương hiệu',
        dataIndex: 'name',
        sorter: {
            compare: (a, b) => a.name.localeCompare(b.name),
            multiple: 3,
        },
        ellipsis: true,
        width: 200,
    },
    {
        title: 'Code',
        dataIndex: 'code',
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

function Data({ params, setParams, setBrandIds }) {
    const navigate = useNavigate();
    const { data, isLoading } = useGetListBrand(params);
    const [tdata, setTData] = useState([]);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: params.pageIndex,
            pageSize: params.pageSize,
            total: data?.data?.totalItems,
        },
    });
    const [isDetailOpen, setIsDetailOpen] = useState({
        id: 0,
        isOpen: false,
    });
    const [isDisableOpen, setIsDisableOpen] = useState({
        id: 0,
        isOpen: false,
    });

    useEffect(() => {
        if (isLoading || !data) return;
        let dt = transformData(data?.data?.items, navigate, setIsDetailOpen, setIsDisableOpen);
        setTData(dt);
        setTableParams({
            ...tableParams,
            pagination: {
                ...tableParams.pagination,
                total: data?.data?.totalItems,
            },
        });
    }, [isLoading, data]);

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setBrandIds(selectedRows.map((item) => item.id));
        },
        getCheckboxProps: (record) => ({
            name: record.name,
        }),
    };

    const onSearch = (value) => {
        setParams({
            ...params,
            search: value,
        });
    };

    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            ...tableParams,
            pagination,
            ...sorter,
        });
        setParams({
            ...params,
            pageIndex: pagination.current,
            pageSize: pagination.pageSize,
            columnName: !sorter.column ? 'id' : sorter.field,
            isSortAccending: sorter.order === 'ascend' || !sorter.order ? true : false,
        });
    };

    const mutationDelete = useDeleteBrand({
        success: () => {
            setIsDisableOpen({ ...isDisableOpen, isOpen: false });
        },
        error: (err) => {
            console.log(err);
        },
        obj: {
            id: isDisableOpen.id,
            params: params,
        },
    });

    const onDelete = async (id) => {
        await mutationDelete.mutateAsync(id);
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
                dataSource={tdata}
                pagination={{ ...tableParams.pagination, showSizeChanger: true }}
                onChange={handleTableChange}
            />

            {isDetailOpen.id !== 0 && (
                <BrandDetail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} />
            )}
            {isDisableOpen.id !== 0 && (
                <ConfirmPrompt
                    handleConfirm={onDelete}
                    content="Bạn có muốn vô hiệu hoá thương hiệu này ?"
                    isDisableOpen={isDisableOpen}
                    setIsDisableOpen={setIsDisableOpen}
                />
            )}
        </div>
    );
}

export default Data;
