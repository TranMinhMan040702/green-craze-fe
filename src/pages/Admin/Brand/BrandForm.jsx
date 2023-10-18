import { Button, Col, Form, Input, Row, Select, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import './brand.scss';
import config from '../../../config';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

function BrandFormPage() {
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
                    onClick={() => navigate(config.routes.admin.brand)}
                    className="text-[1.6rem] bg-[--primary-color] p-4 rounded-xl text-white cursor-pointer"
                    icon={faChevronLeft}
                />
                <h1 className="font-bold">
                    {id ? 'Cập nhật thông tin' : 'Thêm thương hiệu sản phẩm'}
                </h1>
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
                    name="employee-form"
                    layout="vertical"
                    form={form}
                    labelCol={{
                        span: 5,
                    }}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Tên thương hiệu"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập tên thương hiệu!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Code"
                                name="code"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập mã code cho thương hiệu!',
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
                                label="Giới thiệu thương hiệu"
                                name="description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập giới thiệu về thương hiệu!',
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
                                    placeholder="Giới thiệu về thương hiệu . . . ."
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Trạng thái" name="status">
                                <Select defaultValue={1} showSearch>
                                    <Option value={0}>Vô hiệu lực </Option>
                                    <Option value={1}>Có hiệu lực</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Upload
                                name="image"
                                listType="picture-circle"
                                className="flex justify-center"
                                showUploadList={false}
                                beforeUpload={() => false}
                                onChange={handleChange}
                            >
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt="category"
                                        className="w-full rounded-full"
                                    />
                                ) : (
                                    <div ref={inputRef}>
                                        <PlusOutlined />
                                        <div className="mt-[0.8rem]">Tải ảnh lên</div>
                                    </div>
                                )}
                            </Upload>
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

export default BrandFormPage;
