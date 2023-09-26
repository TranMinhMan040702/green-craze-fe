import images from '../../../assets/images';
import './login.scss';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

function LoginPage() {
    return (
        <div className="login-container">
            <div className="w-[400px] max-sm:w-[350px] bg-white rounded-[5px] shadow-[0_2px_6px_0_rgba(0,0,0,0.3)] my-[3.5rem] max-lg:mt-[7rem] mx-auto">
                <div className="p-[2rem]">
                    <div className="flex justify-between items-center">
                        <h3 className="text-[2.8rem]">Đăng nhập</h3>
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
                                placeholder="Nhập Email . . ."
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
                                className="h-[36px] rounded-[3px] shadow-[0_0_2px_0_rgba(0,0,0,0.25)] border-none p-y[1rem] px-[1.5rem] text-[1.6rem] placeholder:text-[1.4rem]"
                                placeholder="Nhập Password . . ."
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                className="h-[36px] mt-[0.6rem] text-[1.6rem] text-white font-medium border-none hover:border-none"
                                block
                                htmlType="submit"
                            >
                                Đăng nhập
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
                        <span className="text-black text-opacity-60">Bạn là thành viên mới?</span>
                        <span className="text-lime-700 text-opacity-60 px-[0.5rem]">
                            <Link>Đăng ký</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
