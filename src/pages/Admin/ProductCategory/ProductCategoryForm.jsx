import { Button, Col, Form, Input, Row, Select, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import './productCategory.scss';
import config from '../../../config';
import {
    useCreateProductCategory,
    useGetProductCategory,
    useUpdateProductCategory,
} from '../../../hooks/api';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

function ProductCategoryFormPage() {
    let { id } = useParams();
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [imageUrl, setImageUrl] = useState();
    const [imageFile, setImageFile] = useState();
    const [form] = Form.useForm();
    const formData = new FormData();
    const { data, isLoading } = id ? useGetProductCategory(id) : { isLoading: null, data: null };

    useEffect(() => {
        if (isLoading || !data) return;
        let productCategory = data.data;
        form.setFieldsValue({
            name: productCategory.name,
            slug: productCategory.slug,
            status: productCategory.status,
        });
        setImageUrl(productCategory.image);
        setImageFile(() => {
            const bits = productCategory.image.split('.');
            return new File([bits[0]], productCategory.image, {
                type: 'text/plain',
            });
        });
    }, [isLoading, data]);

    const mutationCreate = useCreateProductCategory({
        success: () => {
            navigate(config.routes.admin.category);
        },
        error: (err) => {
            console.log(err);
        },
    });

    const mutationUpdate = useUpdateProductCategory({
        success: () => {
            navigate(config.routes.admin.category);
        },
        error: (err) => {
            console.log(err);
        },
    });

    const onAdd = async () => {
        formData.append('name', form.getFieldValue('name'));
        formData.append('slug', form.getFieldValue('slug'));
        formData.append('image', imageFile);
        await mutationCreate.mutateAsync(formData);
    };

    const onEdit = async () => {
        formData.append('name', form.getFieldValue('name'));
        formData.append('slug', form.getFieldValue('slug'));
        formData.append('status', form.getFieldValue('status'));
        formData.append('image', imageFile);
        await mutationUpdate.mutateAsync({
            id: id,
            body: formData,
        });
    };

    const handleChange = (info) => {
        if (info.file) {
            getBase64(info.file, (url) => {
                setImageUrl(url);
            });
        }
        setImageFile(info.fileList[0].originFileObj);
    };

    return (
        <div className="form-container">
            <div className="flex items-center gap-[1rem]">
                <FontAwesomeIcon
                    onClick={() => navigate(config.routes.admin.category)}
                    className="text-[1.6rem] bg-[--primary-color] p-4 rounded-xl text-white cursor-pointer"
                    icon={faChevronLeft}
                />
                <h1 className="font-bold">
                    {id ? 'Cập nhật thông tin' : 'Thêm danh mục sản phẩm'}
                </h1>
            </div>
            <div className="flex items-center justify-start rounded-xl shadow text-[1.6rem] text-black gap-[1rem] bg-white p-7">
                <div className="flex flex-col gap-[1rem]">
                    <p>ID</p>
                    <code className="bg-blue-100 p-2">{data?.data?.id || '_'}</code>
                </div>
                <div className="flex flex-col gap-[1rem]">
                    <p>Ngày tạo</p>
                    <code className="bg-blue-100 p-2">
                        {data?.data?.createdAt
                            ? new Date(data?.data?.createdAt).toLocaleString()
                            : '__/__/____'}
                    </code>
                </div>
                <div className="flex flex-col gap-[1rem]">
                    <p>Ngày cập nhật</p>
                    <code className="bg-blue-100 p-2">
                        {data?.data?.updatedAt
                            ? new Date(data?.data?.updatedAt).toLocaleString()
                            : '__/__/____'}
                    </code>
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
                                label="Tên danh mục"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập tên danh mục!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Slug"
                                name="slug"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập slug!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            {/* <Form.Item label="Danh mục cha" name="parentName">
                                <Select defaultValue={0} showSearch>
                                    <Option value={0}>Không có</Option>
                                    <Option value={1}>Ly Giấy</Option>
                                    <Option value={2}>Hộp giấy</Option>
                                </Select>
                            </Form.Item> */}
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Trạng thái" name="status">
                                <Select
                                    onChange={(v) => form.setFieldValue('status', v)}
                                    defaultValue={true}
                                    showSearch
                                >
                                    <Option value={false}>Vô hiệu lực </Option>
                                    <Option value={true}>Có hiệu lực</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item label="Hình ảnh" name="image">
                                <Upload
                                    name="image"
                                    listType="picture-circle"
                                    className="avatar-uploader flex justify-center"
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
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className="flex justify-between items-center gap-[1rem]">
                        <Button className="min-w-[10%]">Đặt lại</Button>
                        <Button
                            onClick={id ? onEdit : onAdd}
                            className="bg-blue-500 text-white min-w-[10%]"
                        >
                            {id ? 'Cập nhật' : 'Thêm mới'}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default ProductCategoryFormPage;
