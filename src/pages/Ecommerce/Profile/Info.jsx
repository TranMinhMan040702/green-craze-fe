import { Button, DatePicker, Form, Input, Radio, Upload } from 'antd';
import UploadAvatar from './UploadAvatar';

function Info() {
    return (
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
                className="grid sm:grid-cols-2 mx-[1.6rem]"
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
                        <Input className='text-[1.6rem] h-[3rem] bg-white rounded-[0.3rem] shadow outline-none' defaultValue='Nguyễn Minh Sơn'/>
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
                        <p className="text-black text-[1.6rem] font-normal">
                            nguyenminhson102002@gmail.com
                        </p>
                    </Form.Item>
                    <Form.Item label="Số điện thoại" name="phone" className="">
                        <Input className="text-black text-[1.6rem] h-[3rem] bg-white rounded-[0.3rem] shadow" defaultValue={'0354964840'}/>
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
                        <Input type='date' className='max-w-[14rem] text-[1.6rem] p-3 h-[3rem] bg-white rounded-[0.3rem] shadow'/>
                    </Form.Item>
                </div>
                <div className="">
                    <UploadAvatar />
                </div>

                <Form.Item className="text-center max-md:flex xl:ml-[8rem] mt-2 max-sm:justify-center">
                    <Button className="submit-btn text-white text-[1.9rem] w-[11rem] h-[4rem]" htmlType="submit">
                        Lưu
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Info;
