import images from '../../../assets/images';
import './register.scss';
import { Button, Form, Input } from 'antd';

function RegisterPage() {
    return (
        <div className="register-container py-[3.6rem] ">
            <div className="w-[400px] max-sm:w-[350px] bg-white rounded-[5px] shadow-[0_2px_6px_0_rgba(0,0,0,0.3)] max-lg:mt-[7rem] mx-auto">
                <div className="p-[2rem]">
                    <div className="flex justify-between items-center">
                        <h3 className="text-[2.8rem]">Đăng ký</h3>
                        <div className="w-[110px] h-[68.28px]">
                            <img src={images.logo} alt="" />
                        </div>
                    </div>
                    <div className="h-px bg-stone-600 opacity-[0.3] mt-[3rem] mb-[3.6rem]"></div>
                    <Form
                        name="register"
                        labelCol={{
                            span: 0,
                        }}
                        wrapperCol={{
                            span: 24,
                        }}
                        style={{
                            maxWidth: '360px',
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập Họ của bạn!',
                                },
                            ]}
                        >
                            <Input
                                className="h-[36px] rounded-[3px] shadow-[0_0_2px_0_rgba(0,0,0,0.25)] border-none p-y[1rem] px-[1.5rem] text-[1.6rem] placeholder:text-[1.6rem]"
                                placeholder="Họ . . ."
                            />
                        </Form.Item>
                        <Form.Item
                            className="mt"
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập Tên của bạn!',
                                },
                            ]}
                        >
                            <Input
                                className="h-[36px] rounded-[3px] shadow-[0_0_2px_0_rgba(0,0,0,0.25)] border-none p-y[1rem] px-[1.5rem] text-[1.6rem] placeholder:text-[1.6rem]"
                                placeholder="Tên . . ."
                            />
                        </Form.Item>
                        <Form.Item
                            className="mt"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập Email của bạn!',
                                },
                                {
                                    type: 'email',
                                    message: 'Nhập đúng định dạng email',
                                },
                            ]}
                        >
                            <Input
                                className="h-[36px] rounded-[3px] shadow-[0_0_2px_0_rgba(0,0,0,0.25)] border-none p-y[1rem] px-[1.5rem] text-[1.6rem] placeholder:text-[1.4rem]"
                                placeholder="Email . . ."
                            />
                        </Form.Item>
                        <Form.Item
                            className="mt"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập Password của bạn!',
                                },
                            ]}
                        >
                            <Input.Password
                                className="h-[36px] rounded-[3px] shadow-[0_0_2px_0_rgba(0,0,0,0.25)] border-none p-y[1rem] px-[1.5rem] text-[1.6rem] placeholder:text-[1.6rem]"
                                placeholder="Password . . ."
                            />
                        </Form.Item>
                        <Form.Item
                            className="mt"
                            name="confirm"
                            dependencies={['password']}
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập lại Password của bạn!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error('Mật khẩu mới bạn nhập không khớp!'),
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                className="h-[36px] rounded-[3px] shadow-[0_0_2px_0_rgba(0,0,0,0.25)] border-none p-y[1rem] px-[1.5rem] text-[1.6rem] placeholder:text-[1.6rem]"
                                placeholder="Nhập lại Password . . ."
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                className="h-[36px] mt-[0.6rem] text-[1.6rem] text-white font-medium border-none hover:border-none"
                                block
                                htmlType="submit"
                            >
                                Đăng ký
                            </Button>
                        </Form.Item>
                    </Form>
                    <div class="h-[15px] relative flex items-center justify-between">
                        <div class="w-[38%] h-px bg-stone-600 opacity-[0.3]"></div>
                        <div class="text-center text-black text-opacity-40 text-[1.3rem]">HOẶC</div>
                        <div class="w-[38%] h-px bg-stone-600 opacity-[0.3]"></div>
                    </div>
                    <div className="h-[34px] my-[3rem] flex justify-between">
                        <div className="w-[45%] h-[34px] bg-white rounded-[3px] shadow-[0_0_2px_0_rgba(0,0,0,0.4)] flex items-center justify-center">
                            <div className="w-[20px] h-[20px]">
                                <img className="" src={images.facebook} />
                            </div>
                            <div className="ml-[1rem] text-center text-black text-opacity-70 text-[1.4rem]">
                                Facebook
                            </div>
                        </div>
                        <div className="w-[45%] h-[34px] bg-white rounded-[3px] shadow-[0_0_2px_0_rgba(0,0,0,0.4)] flex items-center justify-center">
                            <div className="w-[20px] h-[20px]">
                                <img className="" src={images.google} />
                            </div>
                            <div className="ml-[1rem] text-center text-black text-opacity-70 text-[1.4rem]">
                                Google
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-[1.2rem]">
                        <span className="text-black text-opacity-60">
                            Bằng việc đăng ký, bạn đã đồng ý với GreenCraze về
                            <br />
                        </span>
                        <span className="text-lime-700 text-opacity-60">Điều khoản dịch vụ</span>
                        <span className="text-black text-opacity-60"> & </span>
                        <span className="text-lime-700 text-opacity-60">Chính sách bảo mật</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
