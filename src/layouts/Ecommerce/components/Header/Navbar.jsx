import images from '../../../../assets/images';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar-container w-full h-[50px]">
            <div className="w-[1200px] h-full flex items-center mx-auto justify-between  text-white text-[1.6rem] uppercase">
                <ul className="w-[670px] h-full flex items-center ml-[30px]">
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
                </ul>
                <ul className="h-full flex items-center mr-[24px]">
                    <li className="h-full flex items-center">
                        <Link className="h-full flex items-center">
                            <div className="w-[40px] h-[40px]">
                                <img src={images.community} alt="community" />
                            </div>
                            Cộng đồng
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
