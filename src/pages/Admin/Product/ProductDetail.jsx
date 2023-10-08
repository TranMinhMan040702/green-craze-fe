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
        property: 'Tên sản phẩm',
        value: 'Ly giấy 120ml - 4oz (Sampling)',
    },
    {
        key: '5',
        property: 'Code',
        value: 'UPC335',
    },
    {
        key: '6',
        property: 'Slug',
        value: 'ly-giay-UPC335',
    },
    {
        key: '7',
        property: 'Mô tả ngắn gọn sản phẩm',
        value: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    },
    {
        key: '8',
        property: 'Mô tả sản phẩm',
        value: 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    },
    {
        key: '9',
        property: 'Hình ảnh',
        value: (
            <img
                className="w-20 h-20 rounded-xl"
                src="https://dummyimage.com/138x100.png/dddddd/000000"
            />
        ),
    },
    {
        key: '10',
        property: 'Tên danh mục',
        value: 'Ly giấy',
    },
    {
        key: '11',
        property: 'Tên thương hiệu',
        value: 'Bình Minh',
    },
    {
        key: '12',
        property: 'Trạng thái',
        value: (
            <Tag className="w-fit uppercase" color="green">
                Đã kích hoạt
            </Tag>
        ),
    },
    {
        key: '13',
        property: 'Dạng bán ra',
        value: (
            <div className="flex flex-col gap-[1rem]">
                <Tag className="w-fit uppercase" color="magenta">
                    Lốc - 50 cái
                </Tag>
                <Tag className="w-fit uppercase" color="magenta">
                    Thùng - 1000 cái
                </Tag>
            </div>
        ),
    },
];

function ProductDetail({ isDetailOpen, setIsDetailOpen }) {
    return (
        <Detail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} rawData={rawData} />
    );
}

export default ProductDetail;
