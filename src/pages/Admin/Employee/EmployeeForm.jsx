import { Button, Col, Form, Input, Row, Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './employee.scss';
import config from '../../../config';

function EmployeeFormPage() {
    let { id } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    return (
        <div className="form-container w-[60%] max-xl:w-[80%]">
            <div className="flex items-center gap-[1rem]">
                <FontAwesomeIcon
                    onClick={() => navigate(config.routes.admin.employee)}
                    className="text-[1.6rem] bg-[--primary-color] p-4 rounded-xl text-white cursor-pointer"
                    icon={faChevronLeft}
                />
                <h1 className="font-bold">{id ? 'Cập nhật thông tin' : 'Thêm nhân viên'}</h1>
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
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập email của bạn!',
                                    },
                                    {
                                        type: 'email',
                                        message: 'Nhập đúng định dạng email',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Mật khẩu"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập mật khẩU của bạn!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Họ"
                                name="firstname"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập họ của bạn!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Tên"
                                name="lastname"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập tên của bạn!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Số điện thoại"
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập số điện thoại của bạn!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Giới tính" name="gender">
                                <Select defaultValue={'Nam'}>
                                    <Option value="Nam">Nam</Option>
                                    <Option value="Nữ">Nữ</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Tỉnh/Thành phố" name="province">
                                <Select defaultValue={'TPHCM'} showSearch>
                                    <Option value="TPHCM">TPHCM</Option>
                                    <Option value="Hà Nội">Hà Nội</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Quận/Huyện" name="district">
                                <Select defaultValue={'TP Thủ Đức'} showSearch>
                                    <Option value="TP Thủ Đức">Tp Thủ Đức</Option>
                                    <Option value="Quận Thanh Xuân">Quận Thanh Xuân</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Phường/Xã" name="ward">
                                <Select defaultValue={'Phường Linh Đông'} showSearch>
                                    <Option value="Phường Linh Trung">Phường Linh Trung</Option>
                                    <Option value="Phường Linh Đông">Phường Linh Đông</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Địa chỉ cụ thể"
                                name="street"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập địa chỉ của bạn!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Trạng thái" name="status">
                                <Select defaultValue={'Kích hoạt'}>
                                    <Option value="Kích hoạt">Kích hoạt</Option>
                                    <Option value="Vô hiệu hoá">Vô hiệu hoá</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Loại nhân viên" name="staff_type">
                                <Select defaultValue={'Mạng xã hội'}>
                                    <Option value="Mạng xã hội">Mạng xã hội</Option>
                                    <Option value="TMDT">TMDT</Option>
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

export default EmployeeFormPage;
