import { Tag } from 'antd';
import { useEffect, useState } from 'react';

import Detail from '../../../layouts/Admin/components/Detail';
import { useGetEmployee } from '../../../hooks/api';

function transformData(employee) {
    let address = employee?.addresses.find((a) => a.isDefault);
    return [
        {
            key: '1',
            property: 'ID',
            value: employee?.id,
        },
        {
            key: '2',
            property: 'Ngày tạo',
            value: new Date(employee?.createdAt)?.toLocaleString(),
        },
        {
            key: '3',
            property: 'Ngày cập nhật',
            value: employee?.updatedAt && new Date(employee?.updatedAt)?.toLocaleString(),
        },
        {
            key: '4',
            property: 'Email',
            value: employee?.email,
        },
        {
            key: '5',
            property: 'Họ',
            value: employee?.firstName,
        },
        {
            key: '6',
            property: 'Tên',
            value: employee?.lastName,
        },
        {
            key: '7',
            property: 'Số điện thoại',
            value: employee?.phone,
        },
        {
            key: '8',
            property: 'Giới tính',
            value: employee?.gender,
        },
        {
            key: '9',
            property: 'Ngày sinh',
            value: employee?.dob && new Date(employee?.dob).toLocaleDateString(),
        },
        {
            key: '10',
            property: 'Tên đường',
            value: address?.street,
        },
        {
            key: '11',
            property: 'Tên tỉnh thành',
            value: address?.province?.name,
        },
        {
            key: '12',
            property: 'Tên quận huyện',
            value: address?.district?.name,
        },
        {
            key: '13',
            property: 'Tên xã',
            value: address?.ward?.name,
        },
        {
            key: '14',
            property: 'Ảnh đại diện',
            value: <img className="w-20 h-20 rounded-xl" src={employee?.avatar} />,
        },
        {
            key: '15',
            property: 'Trạng thái',
            value: (
                <Tag className="w-fit uppercase" color={employee?.status ? 'green' : 'red'}>
                    {employee?.status ? 'Kích hoạt' : 'Vô hiệu hóa'}
                </Tag>
            ),
        },
        {
            key: '16',
            property: 'Loại nhân viên',
            value: (
                <Tag className="w-fit uppercase" color="green">
                    {employee?.type}
                </Tag>
            ),
        },
        {
            key: '17',
            property: 'Vai trò',
            value: (
                <div className="flex flex-col gap-[1rem]">
                    {employee?.roles.map((r) => (
                        <Tag className="w-fit uppercase">{r}</Tag>
                    ))}
                </div>
            ),
        },
        {
            key: '18',
            property: 'Mã',
            value: employee?.code,
        },
    ];
}

function EmployeeDetail({ isDetailOpen, setIsDetailOpen }) {
    const { data, isLoading } = useGetEmployee(isDetailOpen.id);
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        if (isLoading || !data) return;
        setEmployee(transformData(data?.data));
    }, [isLoading, data]);
    return (
        <Detail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} rawData={employee} />
    );
}

export default EmployeeDetail;
