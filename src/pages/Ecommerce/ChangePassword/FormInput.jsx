import { Button, Form, Input, Radio } from 'antd';
import { NavLink } from 'react-router-dom';

function FormInput() {
    return (
        <div className="flex max-xl:flex-col max-xl:items-center justify-center mt-[8rem]">
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
                className=" w-[44.3%]"
            >
                <div className="">
                    <Form.Item
                        label="Mật khẩu hiện tại"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập mật khẩu hiện tại của bạn!',
                            },
                        ]}
                    >
                        <Input
                            className="text-[1.6rem] h-[3rem] bg-white rounded-[0.3rem] shadow outline-none"
                            defaultValue=""
                        />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu mới"
                        name="newpassoword"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập mật khẩu mới!',
                            },
                        ]}
                    >
                        <Input
                            className="text-[1.6rem] h-[3rem] bg-white rounded-[0.3rem] shadow outline-none"
                            defaultValue=""
                        />
                    </Form.Item>
                    <Form.Item
                        label="Xác nhận mật khẩu"
                        name="confirmpassword"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập mật khẩu xác nhận!',
                            },
                        ]}
                    >
                        <Input
                            className="text-black text-[1.6rem] h-[3rem] bg-white rounded-[0.3rem] shadow"
                            defaultValue={''}
                        />
                    </Form.Item>
                </div>
                <Form.Item className="text-center max-xl:flex max-xl:justify-center xl:ml-[8rem] mt-[6rem]">
                    <Button
                        className="submit-btn text-white text-[1.9rem] w-[11rem] h-[4rem]"
                        htmlType="submit"
                    >
                        Xác nhận
                    </Button>
                </Form.Item>
            </Form>
            <NavLink className='text-[1.4rem] h-[1.4rem] hover:text-blue-500 text-black xl:ml-[1.8rem] mt-[0.5rem]'>Quên mật khẩu?</NavLink>
        </div>
    );
}

export default FormInput;
