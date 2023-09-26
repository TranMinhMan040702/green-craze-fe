import { Button, DatePicker, Form, Input, Radio, Upload } from 'antd';
import AccountLayout from '../../../layouts/Ecommerce/AccountLayout';
import UploadAvatar from './UploadAvatar';
import './profilepage.scss';
function ProfilePage() {
    return (
        <AccountLayout>
            <div className="profile-container">
                <div className="border-b-[0.2rem] px-[2rem] pb-[1.5rem]">
                    <h1 className="capitalize">Hồ sơ của tôi</h1>
                    <p className="text-[1.4rem]">Quản lý hồ sơ để bảo mật tài khoản</p>
                </div>
                <div className="xl:p-[7rem] md:p-[5rem] sm:p-[1rem]">
                    <Form
                        name="my-profile"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                        className="grid xl:grid-cols-2 mx-[1.6rem]"
                    >
                        <div className="">
                            <Form.Item
                                label="Tên"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập tên của bạn!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập email của bạn!',
                                    },
                                    {
                                        pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
                                        message: 'Nhập đúng định dạng email',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Số điện thoại"
                                name="phone"
                                className="md:flex md:flex-col"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập số điện thoại của bạn!',
                                    },
                                    {
                                        pattern: '',
                                        message: 'Nhập đúng định dạng số điện thoại',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Giới tính" name="gender">
                                <Radio.Group defaultValue={'Nam'}>
                                    <Radio value="Nam">Nam</Radio>
                                    <Radio value="Nữ">Nữ</Radio>
                                    <Radio value="Khác">Khác</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item
                                label="Ngày sinh"
                                name="dob"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập ngày sinh của bạn!',
                                    },
                                ]}
                            >
                                <DatePicker />
                            </Form.Item>
                        </div>
                        <div className="">
                            <UploadAvatar />
                        </div>

                        <Form.Item className="text-center ml-[3.5rem] mt-7">
                            <Button className="submit-btn text-white" htmlType="submit">
                                Lưu
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </AccountLayout>
    );
}

export default ProfilePage;
