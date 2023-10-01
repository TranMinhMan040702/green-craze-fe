import images from '../../../assets/images';
import { Avatar, Image } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating() {
    return (
        <div className="rating p-[2rem] border-b-[1px]">
            <div className="flex items-start">
                <div className="avatar">
                    <Avatar src={images.user} />
                </div>
                <div className="px-[1rem]">
                    <div className="text-[1.2rem]">
                        <span>mantran2002</span>
                        <div className="star-color my-[0.3rem]">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <span className="font-light">2023-08-09 16:25</span>
                    </div>
                    <div className="text-[1.4rem]">
                        <div className="my-[0.6rem]">
                            Chất lượng sản phẩm: Tốt nhé mọi ngiời Tính năng nổi bật: âm thanh hay,
                            ngoại hình đẹp, có app quản lý Trong tầm giá 300k không ngờ cái hộp nó
                            chỉnh chu đến thế. Điểm khác biệt so với WM01 vừa nhìn vào là nhận ra:
                            nắp case xuyên thấu thấy 2 tai ở trong, và đều có vòng led sáng, cổng
                            type C màu vàng nhìn rất nổi bật cá tính. Âm thanh nổi trội, ổn định,
                            nhiều chức năng tùy chỉnh trong app.
                        </div>
                        <div className="w-[550px] max-md:w-[350px] max-sm:w-[150px] grid grid-cols-6 max-md:grid-cols-4 max-sm:grid-cols-2 gap-[2rem]">
                            <Image
                                width={80}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                            <Image
                                width={80}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                            <Image
                                width={80}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                            <Image
                                width={80}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                            <Image
                                width={80}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                            <Image
                                width={80}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rating;
