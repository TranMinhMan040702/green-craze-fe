import images from '../../../../assets/images';
import { Link } from 'react-router-dom';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Head() {
    return (
        <div className="head-container bg-white w-[1188px] h-[68px] my-2.5 flex items-center justify-between mx-auto">
            <Link>
                <div className="w-[110px] h-[68px]">
                    <img src={images.logo} alt="logo" />
                </div>
            </Link>
            <div className="search w-[488px] h-[40px] pl-[15px] pr-[5px] py-2.5 rounded-full justify-between items-center inline-flex">
                <input
                    className="bg-transparent w-full p-[5px] border-hidden text-black text-[1.4rem] placeholder:text-[1.4rem] outline-none"
                    type="search"
                    name="search"
                    id="search-main"
                    placeholder="Tìm kiếm sản phẩm . . . ."
                />
                <button className="w-[40px] h-[40px] text-[1.4rem]">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className="w-[440px] flex items-center justify-between">
                <Link>
                    <div className="flex items-center">
                        <div className="w-[28px] h-[28px] mr-[15px]">
                            <img src={images.bell} alt="bell" />
                        </div>
                        <span className="text-[1.4rem]">Thông báo</span>
                    </div>
                </Link>
                <Link>
                    <div className="flex items-center">
                        <div className="w-[28px] h-[28px] mr-[15px]">
                            <img src={images.user} alt="bell" />
                        </div>
                        <span className="text-[1.4rem]">Đăng nhập</span>
                    </div>
                </Link>
                <Link>
                    <div className="cart w-[130px] h-[40px] bg-white p-[8px] flex items-center justify-start">
                        <FontAwesomeIcon className="text-[2.4rem]" icon={faCartShopping} />
                        <span className="text-[1.4rem] mx-[4px]">Giỏ hàng</span>
                        <span className="text-[1.2rem] px-[5px] py-[3px] bg-yellow-400 rounded-[5px]">
                            5
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Head;
