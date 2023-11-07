import images from '../../../../assets/images';
import config from '../../../../config';
import { Link } from 'react-router-dom';
import {
    faBars,
    faCartShopping,
    faMagnifyingGlass,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetMe } from '../../../../hooks/api';
import { Dropdown } from 'antd';

function Head() {
    const { isLoading, data } = useGetMe();

    return (
        <div className="head-container">
            <div className="container grid grid-cols-12 lg:gap-[5rem] mx-auto bg-white h-[68px] my-[1rem] sm:px-[3.2rem] px-[1rem] items-center justify-between">
                <label for="active" className="lg:hidden col-span-4 text-[2.4rem] cursor-pointer">
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <Link to={'/'} className="lg:col-span-2 col-span-4">
                    <div className="logo md:w-[110px] md:h-[68px] mx-auto">
                        <img src={images.logo} alt="logo" />
                    </div>
                </Link>
                <div className="search xl:col-span-5 lg:col-span-4 col-span-12 max-lg:order-1 flex-1 h-[40px] pl-[1.5rem] pr-[0.5rem] py-2.5 rounded-full justify-between items-center inline-flex">
                    <input
                        className="bg-transparent w-full p-[0.5rem] border-hidden text-black text-[1.4rem] placeholder:text-[1.4rem] outline-none"
                        type="search"
                        name="search"
                        id="search-main"
                        placeholder="Tìm kiếm sản phẩm . . . ."
                    />
                    <button className="w-[40px] h-[40px] text-[1.4rem]">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className="xl:col-span-5 lg:col-span-6 col-span-4 flex items-center lg:justify-center justify-end">
                    <Link>
                        <div className="max-lg:hidden flex items-center">
                            <div className="w-[28px] h-[28px] mr-[1.5rem]">
                                <img src={images.bell} alt="bell" />
                            </div>
                            <span className="text-[1.4rem]">Thông báo</span>
                        </div>
                    </Link>
                    <div className="max-lg:hidden flex items-center mx-[3rem]">
                        {data?.data ? (
                            <Dropdown
                                menu={{
                                    items: [
                                        {
                                            key: '1',
                                            label: (
                                                <Link to={config.routes.web.profile}>
                                                    Tài khoản của Tôi
                                                </Link>
                                            ),
                                        },
                                        {
                                            key: '2',
                                            label: (
                                                <Link to={config.routes.web.order}>Đơn mua</Link>
                                            ),
                                        },
                                        {
                                            key: '3',
                                            label: <Link>Đăng xuất</Link>,
                                        },
                                    ],
                                }}
                                placement="bottom"
                                arrow
                            >
                                <div className="flex items-center">
                                    <div className="w-[28px] h-[28px] mr-[1.5rem]">
                                        <img
                                            className="rounded-full"
                                            src={
                                                data?.data?.avatar
                                                    ? data?.data?.avatar
                                                    : images.user
                                            }
                                            alt="bell"
                                        />
                                    </div>
                                    <div className="text-[1.4rem]">{`${data?.data?.lastName} ${data?.data?.firstName}`}</div>
                                </div>
                            </Dropdown>
                        ) : (
                            <div className="flex items-center">
                                <div className="w-[28px] h-[28px] mr-[1.5rem]">
                                    <img
                                        className="rounded-full"
                                        src={data?.data?.avatar ? data?.data?.avatar : images.user}
                                        alt="bell"
                                    />
                                </div>
                                <div className="flex-col">
                                    <Link
                                        to={config.routes.web.login}
                                        className="block text-[1.6rem]"
                                    >
                                        Đăng nhập
                                    </Link>
                                    <Link
                                        to={config.routes.web.register}
                                        className="block text-[1.2rem]"
                                    >
                                        Đăng ký
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to={config.routes.web.cart}>
                        <div className="cart max-md:border-none w-[130px] h-[40px] bg-white p-[0.8rem] flex items-center justify-start max-md:justify-end max-md:relative">
                            <FontAwesomeIcon className="text-[2.4rem]" icon={faCartShopping} />
                            <span className="max-md:hidden text-[1.4rem] mx-[0.4rem]">
                                Giỏ hàng
                            </span>
                            <span className="max-md:absolute bottom-[2rem] right-[-0.2rem] top text-[1.2rem] px-[0.5rem] py-[0.3rem] bg-yellow-400 rounded-[5px]">
                                5
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
            <input className="hidden" type="checkbox" id="active" />
            <div className="wrapper hidden h-screen w-screen fixed top-0 left-0 justify-between z-10">
                <div className="menu bg-white min-w-[300px]">
                    <div className="top py-[1rem] px-[1.5rem]">
                        <div className="flex items-center text-white">
                            <div className="text-[2.4rem] mr-[1.5rem]">
                                <FontAwesomeIcon icon={faUserCircle} />
                            </div>
                            <div className="flex-col">
                                <Link className="block text-[1.6rem]">Đăng nhập</Link>
                                <Link className="block text-[1.2rem]">Đăng ký</Link>
                            </div>
                        </div>
                    </div>
                    <ul className="flex-col text-[1.6rem] uppercase">
                        <li>
                            <Link>Trang chủ</Link>
                        </li>
                        <li>
                            <Link>Sản phẩm</Link>
                        </li>
                        <li>
                            <Link>Liên hệ</Link>
                        </li>
                        <li>
                            <Link>Về chúng tôi</Link>
                        </li>
                        <li>
                            <Link>Cộng đồng</Link>
                        </li>
                    </ul>
                </div>
                <label for="active" className="h-full w-full bg-black opacity-[0.2]"></label>
            </div>
        </div>
    );
}

export default Head;
