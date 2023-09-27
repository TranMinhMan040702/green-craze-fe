import { Button, DatePicker, Form, Input, Radio, Upload } from 'antd';
import UploadAvatar from './UploadAvatar';
import { useEffect } from 'react';

function Info() {
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({
            name: 'Nguyễn Minh Sơn',
            phone: '0354964840'
        });
    }, []);
    return (
        <div className="md:p-[5rem] sm:p-[1rem]">
            <Form
                form={form}
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
                        className='text-[1.6rem]'
                        rules={[
                            {
                                required: true,
                                message: 'Nhập tên của bạn!',
                            },
                        ]}
                    >
                        <Input className="text-[1.6rem] h-[3rem] bg-white rounded-[0.3rem] shadow outline-none" />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <p className="text-black text-[1.6rem] font-normal">
                            nguyenminhson102002@gmail.com
                        </p>
                    </Form.Item>
                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        className=""
                        rules={[
                            {
                                required: true,
                                message: 'Nhập số điện thoại của bạn!',
                            },
                        ]}
                    >
                        <Input className="text-black text-[1.6rem] h-[3rem] bg-white rounded-[0.3rem] shadow" />
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
                        <DatePicker 
                            className="max-w-[14rem] text-[1.6rem] p-3 h-[3rem] bg-white rounded-[0.3rem] shadow"
                        />
                    </Form.Item>
                </div>
                <div className="">
                    <UploadAvatar />
                </div>

                <Form.Item className="text-center max-md:flex xl:ml-[8rem] mt-2 max-sm:justify-center">
                    <button
                        className="submit-btn text-white text-[2rem] w-[11rem] h-[4rem] pb-[0.5rem] rounded-lg"
                        type="submit"
                    >
                        Lưu
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Info;
