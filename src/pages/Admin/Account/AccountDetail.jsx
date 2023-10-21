import { Tag } from 'antd';
import { useEffect, useState } from 'react';

import Detail from '../../../layouts/Admin/components/Detail';
import { useGetUser } from '../../../hooks/api';

const rawData = [
    {
        key: '1',
        property: 'ID',
        value: '1',
    },
    {
        key: '2',
        property: 'Ngày tạo',
        value: new Date().toLocaleString(),
    },
    {
        key: '3',
        property: 'Ngày cập nhật',
        value: new Date().toLocaleString(),
    },
    {
        key: '4',
        property: 'Email',
        value: 'nguyenminhson10102002@gmail.com',
    },
    {
        key: '5',
        property: 'Họ',
        value: 'Nguyễn',
    },
    {
        key: '6',
        property: 'Tên',
        value: 'Minh Sơn',
    },
    {
        key: '7',
        property: 'Số điện thoại',
        value: '0354964840',
    },
    {
        key: '8',
        property: 'Giới tính',
        value: 'Nam',
    },
    {
        key: '9',
        property: 'Địa chỉ mặc định',
        value: '83027 Ludington Center, Bình Lộc, Diên Khánh, Khánh Hoà',
    },
    {
        key: '10',
        property: 'Địa chỉ 1',
        value: '83027 Ludington Center, Bình Lộc, Diên Khánh, Khánh Hoà',
    },
    {
        key: '11',
        property: 'Địa chỉ 2',
        value: '83027 Ludington Center, Bình Lộc, Diên Khánh, Khánh Hoà',
    },
    {
        key: '12',
        property: 'Ảnh đại diện',
        value: (
            <img
                className="w-20 h-20 rounded-xl"
                src="https://dummyimage.com/138x100.png/dddddd/000000"
            />
        ),
    },
    {
        key: '13',
        property: 'Trạng thái',
        value: (
            <Tag className="w-fit uppercase" color="green">
                Đã kích hoạt
            </Tag>
        ),
    },
    {
        key: '14',
        property: 'Vai trò',
        value: (
            <div className="flex flex-col gap-[1rem]">
                <Tag className="w-fit uppercase">Quản trị viên</Tag>
                <Tag className="w-fit uppercase">Người dùng</Tag>
            </div>
        ),
    },
];
function transformData(user) { 
    let key = 13;
    let addressArr = user?.addresses?.map((a, idx) => {
        let title = 'Địa chỉ ' + (idx + 1);
        if(a.isDefault){
            title = 'Địa chỉ mặc định'
        }
        return {
            key: key++,
            property: title,
            value: `${a.street}, ${a.ward.name}, ${a.district.name}, ${a.province.name}`,
        }
    })
    return [
        {
            key: '1',
            property: 'ID',
            value: user?.id,
        },
        {
            key: '2',
            property: 'Ngày tạo',
            value: new Date(user?.createdAt)?.toLocaleString(),
        },
        {
            key: '3',
            property: 'Ngày cập nhật',
            value: user?.updatedAt && new Date(user?.updatedAt)?.toLocaleString(),
        },
        {
            key: '4',
            property: 'Email',
            value: user?.email,
        },
        {
            key: '5',
            property: 'Họ',
            value: user?.firstName,
        },
        {
            key: '6',
            property: 'Tên',
            value: user?.lastName,
        },
        {
            key: '7',
            property: 'Số điện thoại',
            value: user?.phone,
        },
        {
            key: '8',
            property: 'Giới tính',
            value: user?.gender,
        },
        {
            key: '9',
            property: 'Ngày sinh',
            value: user?.dob,
        },
        {
            key: '10',
            property: 'Ảnh đại diện',
            value: (
                <img
                    className="w-20 h-20 rounded-xl"
                    src={user?.avatar}
                />
            ),
        },
        {
            key: '11',
            property: 'Trạng thái',
            value: (
                <Tag className="w-fit uppercase" color={user?.status ? 'green' : 'red'}>
                    {user?.status ? 'Kích hoạt' : 'Vô hiệu hóa'}
                </Tag>
            ),
        },
        {
            key: '12',
            property: 'Vai trò',
            value: (
                <div className="flex flex-col gap-[1rem]">
                    {user?.roles.map((r) => (
                        <Tag className="w-fit uppercase">{r}</Tag>
                    ))}
                </div>
            ),
        },
        ...addressArr
    ];
}   
function AccountDetail({ isDetailOpen, setIsDetailOpen }) {
    const { data, isLoading } = useGetUser(isDetailOpen.id);
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (isLoading || !data) return;
        setUser(transformData(data?.data));
    }, [isLoading, data]);
    return (
        <Detail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} rawData={user} />
    );
}

export default AccountDetail;
