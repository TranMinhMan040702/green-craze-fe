import { Tag } from 'antd';
import Detail from '../../../layouts/Admin/components/Detail';

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
        property: 'Tên đường',
        value: '83027 Ludington Center',
    },
    {
        key: '10',
        property: 'Tên tỉnh thành',
        value: 'Khánh Hoà',
    },
    {
        key: '11',
        property: 'Tên quận huyện',
        value: 'Diên Khánh',
    },
    {
        key: '12',
        property: 'Tên xã',
        value: 'Bình Lộc',
    },
    {
        key: '13',
        property: 'Ảnh đại diện',
        value: (
            <img
                className="w-20 h-20 rounded-xl"
                src="https://dummyimage.com/138x100.png/dddddd/000000"
            />
        ),
    },
    {
        key: '14',
        property: 'Trạng thái',
        value: (
            <Tag className="w-fit uppercase" color="green">
                Đã kích hoạt
            </Tag>
        ),
    },
    {
        key: '15',
        property: 'Vai trò',
        value: (
            <div className="flex flex-col gap-[1rem]">
                <Tag className="w-fit uppercase">Quản trị viên</Tag>
                <Tag className="w-fit uppercase">Người dùng</Tag>
            </div>
        ),
    },
];

function AccountDetail({ isDetailOpen, setIsDetailOpen }) {
    return (
        <Detail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} rawData={rawData} />
    );
}

export default AccountDetail;
