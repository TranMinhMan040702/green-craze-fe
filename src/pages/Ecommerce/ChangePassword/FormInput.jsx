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
                className=""
            >
                <div className="">
                    <Form.Item
                        label="Mật khẩu hiện tại"
                        name="password"
                        className='text-[1.6rem]'
                        rules={[
                            {
                                required: true,
                                message: 'Nhập mật khẩu hiện tại của bạn!',
                            },
                        ]}
                    >
                        <Input.Password
                            className="text-[1.6rem] w-[32.6rem] h-[3.5rem] bg-white rounded-[0.3rem] shadow outline-none"
                            placeholder='Nhập mật khẩu hiện tại'
                            defaultValue=""
                        />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu mới"
                        name="newpassoword"
                        className=' text-[1.6rem]'
                        rules={[
                            {
                                required: true,
                                message: 'Nhập mật khẩu mới!',
                            },
                        ]}
                    >
                        <Input.Password
                            className="text-[1.6rem] w-[32.6rem] h-[3.5rem] bg-white rounded-[0.3rem] shadow outline-none"
                            placeholder='Nhập mật khẩu mới'
                            defaultValue=""
                        />
                    </Form.Item>
                    <Form.Item
                        label="Xác nhận mật khẩu"
                        name="confirmpassword"
                        className='text-[1.6rem]'
                        rules={[
                            {
                                required: true,
                                message: 'Nhập mật khẩu xác nhận!',
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (!value || getFieldValue('newpassoword') === value) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                              },
                            })
                        ]}
                    >
                        <Input.Password
                            className="text-black text-[1.6rem] w-[32.6rem] h-[3.5rem] bg-white rounded-[0.3rem] shadow"
                            placeholder='Nhập mật khẩu xác nhận'
                            defaultValue={''}
                        />
                    </Form.Item>
                </div>
                <Form.Item className="text-center max-xl:flex max-xl:justify-center xl:ml-[8rem] md:mt-[6rem]">
                    <button
                        className="submit-btn text-white text-[2rem] pb-[0.5rem] w-[16.8rem] h-[4rem] rounded-lg border-none"
                        type="submit"
                    >
                        Xác nhận
                    </button>
                </Form.Item>
            </Form>
            <NavLink className='text-[1.6rem] h-[1.4rem] hover:text-blue-500 text-black xl:ml-[3rem] mt-[0.5rem]'>Quên mật khẩu?</NavLink>
        </div>
    );
}

export default FormInput;
