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
        property: 'Tên thương hiệu',
        value: 'Bình Minh',
    },
    {
        key: '5',
        property: 'Code',
        value: 'BINH_MINH',
    },
    {
        key: '6',
        property: 'Giới thiệu',
        value: 'Công ty in ly giấy Bình Minh cũng là một trong những công ty sản xuất ly giấy được thành lập vào cuối năm 2012. Từ những ngày đầu hoạt động cho đến nay, công ty luôn đặt chữ “Tín” lên hàng đầu, và đã tạo dựng, hợp tác với rất nhiều đối tác lớn nhỏ.',
    },
    {
        key: '7',
        property: 'Hình ảnh',
        value: (
            <img
                className="w-20 h-20 rounded-xl"
                src="https://dummyimage.com/138x100.png/dddddd/000000"
            />
        ),
    },
    {
        key: '8',
        property: 'Trạng thái',
        value: (
            <Tag className="w-fit uppercase" color="green">
                Đã kích hoạt
            </Tag>
        ),
    },
];

function BrandDetail({ isDetailOpen, setIsDetailOpen }) {
    return (
        <Detail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} rawData={rawData} />
    );
}

export default BrandDetail;
