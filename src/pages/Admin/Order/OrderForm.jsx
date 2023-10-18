import { Button, Col, Form, Input, Row, Select, Upload, Table } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './order.scss';
import config from '../../../config';

const columns = [
    {
        title: 'STT',
        dataIndex: 'index',
        key: 'index',
    },
    {
        title: 'Sản phẩm',
        dataIndex: 'product',
        key: 'product',
    },
    {
        title: 'Giá bán',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Số lượng',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Thành tiền',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
    },
];
const data = [
    {
        key: '1',
        index: '1',
        product: (
            <div>
                <p className="text-[1.4rem]">Ly giấy kraft 250ml - 9oz double wall</p>
                <p className="text-[1.2rem] opacity-[0.6]">Lốc - 50 cái {`(SKU: UPC075-1)`}</p>
            </div>
        ),
        price: <div className="font-bold">100.000 ₫</div>,
        quantity: '1',
        totalPrice: <div className="font-bold">100.000 ₫</div>,
    },
];

function OrderFormPage() {
    let { id } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    return (
        <div className="form-container w-full">
            <div className="flex items-center gap-[1rem]">
                <FontAwesomeIcon
                    onClick={() => navigate(config.routes.admin.order)}
                    className="text-[1.6rem] bg-[--primary-color] p-4 rounded-xl text-white cursor-pointer"
                    icon={faChevronLeft}
                />
                <h1 className="font-bold">{'Cập nhật đơn hàng'}</h1>
            </div>
            <div className="flex items-center justify-between rounded-xl shadow text-[1.6rem] text-black gap-[1rem] bg-white p-7">
                <div className="flex items-center justify-start">
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
                <div>
                    <Button className="px-[3rem] bg-[--primary-color] border-none text-[1.5rem] text-white font-medium">
                        Đã giao
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-[1.8rem]">
                <div className="col-span-8">
                    <div className="bg-white p-7 mt-5 rounded-xl shadow">
                        <Table
                            className="mb-[2rem]"
                            pagination={false}
                            columns={columns}
                            dataSource={data}
                        />
                        <div className="flex flex-col items-end">
                            <div className="w-[280px] text-[1.4rem] flex justify-between my-[0.5rem]">
                                <span className="font-medium">Tổng thành tiền:</span>
                                <span className="text-[--primary-color] text-[1.6rem] font-bold">
                                    100.000 đ
                                </span>
                            </div>
                            <div className="w-[280px] text-[1.4rem] flex justify-between my-[0.5rem]">
                                <span className="font-medium">{`Thuế (10%):`}</span>
                                <span className="text-[--primary-color] text-[1.6rem] font-bold">
                                    10.000 đ
                                </span>
                            </div>
                            <div className="w-[280px] text-[1.4rem] flex justify-between my-[0.5rem]">
                                <span className="font-medium">Phí vận chuyển:</span>
                                <span className="text-[--primary-color] text-[1.6rem] font-bold">
                                    40.000 đ
                                </span>
                            </div>
                            <div className="w-[280px] text-[1.4rem] flex justify-between my-[0.5rem]">
                                <span className="font-medium">Tổng tiền phải trả:</span>
                                <span className="text-[--price-color] text-[2rem] font-bold">
                                    150.000 đ
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
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
                                <Col span={24}>
                                    <Form.Item label="Người đặt hàng" name="user">
                                        <Input readOnly defaultValue={'Man'} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item label="Mã đơn hàng" name="code">
                                        <Input readOnly defaultValue={'36987-166'} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item label="Trạng thái đơn hàng" name="status">
                                        <Select defaultValue={0} showSearch>
                                            <Option value={0}>Đang xử lý </Option>
                                            <Option value={1}>Đang giao</Option>
                                            <Option value={2}>Đã giao</Option>
                                            <Option value={3}>Hủy bỏ</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item label="Tên người nhận" name="receiver">
                                        <Input readOnly defaultValue={'do mixi'} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item label="Số điện thoại người nhận" name="phone">
                                        <Input readOnly defaultValue={'0909998877'} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item label="Địa chỉ người nhận" name="address">
                                        <Input.TextArea
                                            readOnly
                                            style={{
                                                height: 80,
                                                resize: 'none',
                                            }}
                                            defaultValue={
                                                'Streaming house, Phường 14, Quận 10, TP Hồ Chí Minh'
                                            }
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item label="Lý do hủy đơn hàng" name="status">
                                        <Select defaultValue={0} showSearch>
                                            <Option value={0}>Đang xử lý </Option>
                                            <Option value={1}>Đang giao</Option>
                                            <Option value={2}>Đã giao</Option>
                                            <Option value={3}>Hủy bỏ</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item label="Lý do hủy đơn hàng" name="cancelReason">
                                        <Input.TextArea
                                            readOnly
                                            style={{
                                                height: 80,
                                                resize: 'none',
                                            }}
                                            defaultValue={''}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item label="Hình thức thanh toán" name="paymentMethod">
                                        <Input readOnly defaultValue={'PayPal'} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item label="Trạng thái thanh toán" name="paymentStatus">
                                        <Input readOnly defaultValue={'Đã thanh toán'} />
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
            </div>
        </div>
    );
}

export default OrderFormPage;
