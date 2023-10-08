import { Button, Col, Form, Input, Row, Select, Upload, InputNumber, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconSquareRoundedX } from '@tabler/icons-react';
import { useRef, useState } from 'react';
import './product.scss';
import config from '../../../config';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const columns = [
    {
        title: 'Tên dạng sản phẩm bán ra',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Sku',
        dataIndex: 'sku',
        key: 'sku',
    },
    {
        title: 'Giá 1 sản phẩm',
        dataIndex: 'itemPrice',
        key: 'itemPrice',
    },
    {
        title: 'Số lượng',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Tổng giá bán',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
    },
    {
        title: 'Hành động',
        dataIndex: 'action',
        key: 'action',
    },
];

const data = [
    {
        key: '1',
        name: (
            <Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Nhập giá trị!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
        ),
        sku: (
            <Form.Item
                name="sku"
                rules={[
                    {
                        required: true,
                        message: 'Nhập giá trị!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
        ),
        itemPrice: (
            <Form.Item
                name="itemPrice"
                rules={[
                    {
                        required: true,
                        message: 'Nhập giá trị!',
                    },
                ]}
            >
                <InputNumber
                    className="w-full"
                    defaultValue={1000}
                    formatter={(value) => `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value.replace(/\đ\s?|(,*)/g, '')}
                    // onChange={onChange}
                />
            </Form.Item>
        ),
        quantity: (
            <Form.Item
                name="quantity"
                rules={[
                    {
                        required: true,
                        message: 'Nhập giá trị!',
                    },
                ]}
            >
                <InputNumber
                    className="w-full"
                    min={1}
                    defaultValue={10}
                    // onChange={onChange}
                />
            </Form.Item>
        ),
        totalPrice: (
            <Form.Item name="totalPrice">
                <InputNumber
                    className="w-full"
                    disabled="true"
                    defaultValue={1000}
                    formatter={(value) => `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value.replace(/\đ\s?|(,*)/g, '')}
                />
            </Form.Item>
        ),
        action: (
            <button className="mb-[2rem] text-red-500">
                <IconSquareRoundedX />
            </button>
        ),
    },
];

function ProductFormPage() {
    const inputRef = useRef(null);
    const [imageUrl, setImageUrl] = useState();
    let { id } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleChange = (info) => {
        if (info.file) {
            getBase64(info.file, (url) => {
                setImageUrl(url);
            });
        }
    };

    return (
        <div className="form-container">
            <div className="flex items-center gap-[1rem]">
                <FontAwesomeIcon
                    onClick={() => navigate(config.routes.admin.product)}
                    className="text-[1.6rem] bg-[--primary-color] p-4 rounded-xl text-white cursor-pointer"
                    icon={faChevronLeft}
                />
                <h1 className="font-bold">{id ? 'Cập nhật thông tin' : 'Thêm sản phẩm'}</h1>
            </div>
            <div className="flex items-center justify-start rounded-xl shadow text-[1.6rem] text-black gap-[1rem] bg-white p-7">
                <div className="flex flex-col gap-[1rem]">
                    <p>ID</p>
                    <code className="bg-blue-100 p-2">_</code>
                </div>
                <div className="flex flex-col gap-[1rem]">
                    <p>Ngày tạo</p>
                    <code className="bg-blue-100 p-2">__/__/____</code>
                </div>
                <div className="flex flex-col gap-[1rem]">
                    <p>Ngày cập nhật</p>
                    <code className="bg-blue-100 p-2">__/__/____</code>
                </div>
            </div>
            <div className="bg-white p-7 mt-5 rounded-xl shadow">
                <Form
                    name=""
                    layout="vertical"
                    form={form}
                    labelCol={{
                        span: 5,
                    }}
                >
                    <div className="mb-[1rem]">
                        <h2 className="text-[2rem] font-bold text-[--text-color]">
                            Thông tin cơ bản
                        </h2>
                        <span className="text-[1.2rem] text-[--text-color]">
                            Một số thông tin chung
                        </span>
                    </div>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Tên sản phẩm"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập tên sản phẩm!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Giá vốn"
                                name="cost"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập giá vốn!',
                                    },
                                ]}
                            >
                                <InputNumber
                                    className="w-full"
                                    defaultValue={1000}
                                    formatter={(value) =>
                                        `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                    }
                                    parser={(value) => value.replace(/\đ\s?|(,*)/g, '')}
                                    // onChange={onChange}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="Đơn vị tính" name="unit">
                                <Select defaultValue={1} showSearch>
                                    <Option value={0}>Hộp </Option>
                                    <Option value={1}>Cái</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Mã sản phẩm"
                                name="code"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập mã sản phẩm!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Slug của sản phẩm"
                                name="slug"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập slug của sản phẩm!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                label="Mô tả ngắn của sản phẩm"
                                name="shortDescription"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập mô tả ngắn gọn sản phẩm!',
                                    },
                                ]}
                            >
                                <Input.TextArea
                                    showCount
                                    maxLength={100}
                                    style={{
                                        height: 60,
                                        resize: 'none',
                                    }}
                                    // onChange={onChange}
                                    placeholder="Mô tả ngắn"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                label="Mô tả của sản phẩm"
                                name="shortDescription"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập mô tả sản phẩm!',
                                    },
                                ]}
                            >
                                <Input.TextArea
                                    showCount
                                    maxLength={1000}
                                    style={{
                                        height: 150,
                                        resize: 'none',
                                    }}
                                    // onChange={onChange}
                                    placeholder="Mô tả"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className="mb-[1rem] flex items-center justify-between">
                        <div>
                            <h2 className="text-[2rem] font-bold text-[--text-color]">
                                Dạng bán ra của sản phẩm
                            </h2>
                            <span className="text-[1.2rem] text-[--text-color]">
                                Thông tin về các dạng bán ra của sản phẩm
                            </span>
                        </div>
                        <Button className="border-[--primary-color] text-[--primary-color] hover:bg-[--background-item-menu-color]">
                            Thêm
                        </Button>
                    </div>
                    <Row gutter={16}>
                        <Table pagination={false} columns={columns} dataSource={data} />
                    </Row>
                    <div className="mb-[1rem] mt-[2rem] flex items-center justify-between">
                        <div>
                            <h2 className="text-[2rem] font-bold text-[--text-color]">
                                Hình ảnh của sản phẩm
                            </h2>
                            <span className="text-[1.2rem] text-[--text-color]">
                                Thêm danh sách hình giới thiệu sản phẩm
                            </span>
                        </div>
                        <Button className="border-[--primary-color] text-[--primary-color] hover:bg-[--background-item-menu-color]">
                            Thêm
                        </Button>
                    </div>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item name="images">
                                <div className="flex items-center justify-start">
                                    <div className="flex flex-col items-center">
                                        <Upload
                                            name="image"
                                            listType="picture-card"
                                            showUploadList={false}
                                            beforeUpload={() => false}
                                            onChange={handleChange}
                                        >
                                            {imageUrl ? (
                                                <img
                                                    src={imageUrl}
                                                    alt="product"
                                                    className="w-full rounded-full"
                                                />
                                            ) : (
                                                <div ref={inputRef}>
                                                    <PlusOutlined />
                                                    <div className="mt-[0.8rem]">Tải ảnh lên</div>
                                                </div>
                                            )}
                                        </Upload>
                                        <button className="mb-[2rem] text-red-500">
                                            <IconSquareRoundedX />
                                        </button>
                                    </div>
                                </div>
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className="mb-[1rem]">
                        <h2 className="text-[2rem] font-bold text-[--text-color]">
                            Thông tin bổ sung
                        </h2>
                        <span className="text-[1.2rem] text-[--text-color]">
                            Một số thông tin thêm
                        </span>
                    </div>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Danh mục sản phẩm" name="parentName">
                                <Select defaultValue={1} showSearch>
                                    <Option value={1}>Ly Giấy</Option>
                                    <Option value={2}>Hộp giấy</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item label="Thương hiệu" name="brand">
                                <Select defaultValue={0} showSearch>
                                    <Option value={0}>Bình Minh </Option>
                                    <Option value={1}>Sản phẩm xanh</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Trạng thái" name="status">
                                <Select defaultValue={1} showSearch>
                                    <Option value={0}>Vô hiệu lực </Option>
                                    <Option value={1}>Có hiệu lực</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className="flex justify-between items-center gap-[1rem]">
                        <Button className="min-w-[10%]">Đặt lại</Button>
                        <Button className="bg-blue-500 text-white min-w-[10%]">
                            {id ? 'Cập nhật' : 'Thêm mới'}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default ProductFormPage;
