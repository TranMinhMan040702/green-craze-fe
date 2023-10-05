import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import config from '../../../config';
import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select, Switch, Tabs } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sale.scss';
import { useState } from 'react';
import SearchingInput from './SearchingInput';
import CategoryItem from './CategoryItem';
import ProductItem from './ProductItem';

function SaleFormPage() {
    let { id } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Ly giấy',
        },
        {
            id: 2,
            name: 'Ly nhựa',
        },
        {
            id: 3,
            name: 'Hộp nhựa',
        },
    ]);
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Ly giấy 123ml',
            code: 'prod-1',
            category: 'Ly giấy',
        },
        {
            id: 2,
            name: 'Ly nhựa 500ml',
            code: 'prod-2',
            category: 'Ly nhựa',
        },
        {
            id: 3,
            name: 'Hộp nhựa vl',
            code: 'prod-3',
            category: 'Hộp nhựa',
        },
    ]);
    const [chosenCategoryList, setChosenCategoryList] = useState([]);
    const [chosenProductList, setChosenProductList] = useState([]);
    return (
        <div className="sale-form-container">
            <div className="flex items-center gap-[1rem]">
                <FontAwesomeIcon
                    onClick={() => navigate(config.routes.admin.sale)}
                    className="text-[1.6rem] bg-[--primary-color] p-4 rounded-xl text-white cursor-pointer"
                    icon={faChevronLeft}
                />
                <h1 className="font-bold">{id ? 'Cập nhật thông tin' : 'Thêm khuyến mãi'}</h1>
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
            <Form
                name="sale-form"
                layout="vertical"
                className="my-5"
                form={form}
                labelCol={{
                    span: 5,
                }}
            >
                <Row gutter={16}>
                    <Col span={16}>
                        <div className="bg-white p-5 rounded-xl shadow">
                            <Tabs
                                type="card"
                                className=''
                                items={[
                                    {
                                        label: 'Danh mục',
                                        key: 1,
                                        children: (
                                            <Form.Item
                                                label="Thêm danh mục sản phẩm"
                                                name="category"
                                            >
                                                <SearchingInput
                                                    setChosenList={setChosenCategoryList}
                                                    chosenList={chosenCategoryList}
                                                    itemList={categories}
                                                    placeholder={'Nhập danh mục sản phẩm'}
                                                    ItemComponent={CategoryItem}
                                                />
                                            </Form.Item>
                                        ),
                                    },
                                    {
                                        label: 'Sản phẩm',
                                        key: 2,
                                        children: (
                                            <Form.Item label="Thêm sản phẩm" name="product">
                                                <SearchingInput
                                                    setChosenList={setChosenProductList}
                                                    chosenList={chosenProductList}
                                                    itemList={products}
                                                    placeholder={'Nhập sản phẩm'}
                                                    ItemComponent={ProductItem}
                                                />
                                            </Form.Item>
                                        ),
                                    },
                                ]}
                            />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="bg-white p-5 rounded-xl shadow">
                            <Form.Item
                                label="Tên khuyến mãi"
                                name="salename"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập giá trị!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Khoảng thời gian"
                                name="daterange"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập giá trị!',
                                    },
                                ]}
                            >
                                <DatePicker.RangePicker showTime />
                            </Form.Item>
                            <Form.Item
                                label="Phần trăm giảm giá"
                                name="percent"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập giá trị!',
                                    },
                                ]}
                            >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item label="Trạng thái khuyến mãi">
                                <Select defaultValue={'Có hiệu lực'}>
                                    <Option value="Có hiệu lực">Có hiệu lực</Option>
                                    <Option value="Vô hiệu lực">Vô hiệu lực</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label='Áp dụng cho tất cả sản phẩm'>
                                <Switch/>
                            </Form.Item>
                            <div className="flex items-center justify-between">
                                <Button className='min-w-[10%]'>Mặc định</Button>
                                <Button htmlType="submit" className="bg-blue-500 text-white min-w-[10%]">
                                    {id ? 'Cập nhật' : 'Thêm'}
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default SaleFormPage;
