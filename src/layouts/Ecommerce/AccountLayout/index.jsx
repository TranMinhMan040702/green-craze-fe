import { faFirstOrder } from '@fortawesome/free-brands-svg-icons';
import { faBell, faBookmark, faEdit, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBook, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Menu } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import config from '../../../config';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Tài khoản của tôi', 'my-account', <FontAwesomeIcon icon={faUser} />, [
        getItem('Hồ sơ', 'profile'),
        getItem('Địa chỉ', 'address'),
        getItem('Sản phẩm yêu thích', 'wish'),
        getItem('Đổi mật khẩu', 'change-password'),
    ]),
    getItem('Đơn mua', 'my-order', <FontAwesomeIcon icon={faBook} />),
    getItem('Thông báo', 'my-notification', <FontAwesomeIcon icon={faBell} />),
];

function AccountLayout({ children }) {
    const navigate = useNavigate();
    const onClick = (e) => {
        switch (e.key) {
            case 'profile':
                navigate(config.routes.web.profile)
                break;
        
            default:
                navigate('/home')
                break;
        }
    };
    return (
        <div className="account-layout-container xl:m-36 sm:m-10">
            <div className="flex rounded-[0.5rem]">
                <div>
                    <div className="flex items-center justify-center pt-7 pb-[2.7rem] border-b-[0.2rem]">
                        <img
                            src="https://via.placeholder.com/100x87"
                            className="rounded-full w-[4.8rem] h-[4.8rem] bg-gray-500"
                        />
                        <div className="ml-3">
                            <h1 className="my-0 text-black text-[1.6rem] font-normal">
                                Nguyễn Minh Sơn
                            </h1>
                            <button className="text-black text-opacity-60 text-[1.2rem] mt-2 font-normal">
                                <FontAwesomeIcon className="mr-1" icon={faEdit} />
                                Sửa hồ sơ
                            </button>
                        </div>
                    </div>
                    <Menu
                        onClick={onClick}
                        defaultSelectedKeys={['my-account']}
                        mode="inline"
                        items={items}
                    />
                </div>
                <div className="container min-h-[60rem] ml-28 bg-white border">{children}</div>
            </div>
        </div>
    );
}

export default AccountLayout;
