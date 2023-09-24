import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss';
import { faLocationPin, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer-container">
            <div className="wrapper 2xl:ml-[36rem] 2xl:mr-[36rem] mr-[5rem] ml-[5rem] pt-[4rem] flex justify-center items-center">
                <div className="grid lg:grid-cols-4 gap-[2rem] md:grid-cols-2 sm:grid-cols-1">
                    <div className="mb-5">
                        <div className="uppercase text-white text-[1.8rem] font-medium leading-snug">
                            VỀ CHÚNG TÔI
                        </div>
                        <img
                            className="w-[10rem] h-[10rem] my-4"
                            src="https://via.placeholder.com/100x87"
                        />
                        <div className="pr-[0.3rem]">
                            <div className="text-white text-[1.6rem] my-3 font-normal leading-snug">
                                CÔNG TY TNHH THE GREEN CRAZE
                            </div>
                        </div>
                        <div className="justify-start my-2 items-baseline gap-[.5rem] inline-flex">
                            <div className="w-5 mr-5 flex-col justify-start items-start inline-flex">
                                <div className="text-white text-[1.5rem]  font-black leading-[1.5rem] ">
                                    <FontAwesomeIcon icon={faLocationPin} />
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="text-white text-[1.5rem]  font-normal leading-snug">
                                    Số 1 Võ Văn Ngân, P. Linh Chiểu, TP.Thủ Đức, TP.HCM
                                </div>
                            </div>
                        </div>
                        <div className="pr-[6.8rem] my-2 justify-start items-baseline gap-[0.5rem] inline-flex">
                            <div className="w-5 mr-5 flex-col justify-start items-start inline-flex">
                                <div className="text-white text-[1.5rem]  font-black leading-[1.5rem] ">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="text-white text-[1.5rem]  font-normal leading-snug">
                                    093 858 7191
                                </div>
                            </div>
                        </div>
                        <div className="pr-[6rem] my-2 justify-start items-baseline gap-[0.5rem] inline-flex">
                            <div className="w-5 mr-5 flex-col justify-start items-start inline-flex">
                                <div className="text-white text-[1.5rem]  font-black leading-[1.5rem] ">
                                    <FontAwesomeIcon icon={faMailBulk} />
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="text-white text-[1.5rem]  font-normal leading-snug">
                                    xinchao@greencraze.vn
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="text-white uppercase text-[1.8rem] font-medium leading-snug">
                            HƯỚNG DẪN
                        </div>
                        <div className="flex-col justify-start items-start gap-[1rem] flex">
                            <div className="text-index text-white text-[1.5rem] font-normal leading-snug">
                                Điều Khoản
                            </div>
                            <div className="text-index text-white text-[1.5rem]  font-normal leading-snug">
                                Mua Hàng và Thanh Toán
                            </div>
                            <div className="text-index text-white text-[1.5rem]  font-normal leading-snug">
                                Chính Sách Giao Hàng
                            </div>
                            <div className="text-index text-white text-[1.5rem]  font-normal leading-snug">
                                Chính Sách Đổi Trả
                            </div>
                            <div className="text-index text-white text-[1.5rem]  font-normal leading-snug">
                                Chính Sách Hoàn Tiền
                            </div>
                            <div className="text-index text-white text-[1.5rem]  font-normal leading-snug">
                                Chính Sách Bảo Mật Thông Tin
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="text-white uppercase text-3xl font-medium leading-snug">
                            THÔNG TIN
                        </div>
                        <div className="flex-col justify-start items-start gap-[1rem] flex">
                            <div className="text-index text-white text-[1.5rem]  font-normal leading-snug">
                                Trang chủ
                            </div>
                            <div className="text-index text-white text-[1.5rem]  font-normal leading-snug">
                                Giới thiệu
                            </div>
                            <div className="text-index text-white text-[1.5rem]  font-normal leading-snug">
                                Tuyển dụng
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="flex-col justify-start items-start gap-[16.59px] flex">
                            <div className="text-white uppercase text-3xl font-medium leading-snug">
                                Theo dõi chúng tôi
                            </div>
                            <div className="justify-start items-start inline-flex">
                                <div className="self-stretch pt-[0.5rem] pb-[0.8rem] flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-[2.5rem] font-normal leading-[2.5rem]">
                                        <FontAwesomeIcon
                                            className="text-index "
                                            icon={faFacebook}
                                        />
                                    </div>
                                </div>
                                <div className="self-stretch pl-4 pt-[.5rem] pb-[0.8rem] flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-[2.5rem] font-normal leading-[2.5rem]">
                                        <FontAwesomeIcon className="text-index " icon={faTwitter} />
                                    </div>
                                </div>
                                <div className="self-stretch pl-4 pt-[.5rem] pb-[0.8rem] flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-[2.5rem] font-normal leading-[2.5rem]">
                                        <FontAwesomeIcon className="text-index " icon={faTwitch} />
                                    </div>
                                </div>
                                <div className="self-stretch pl-4 pt-[.5rem] pb-[0.8rem] flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-[2.5rem] font-normal leading-[2.5rem]">
                                        <FontAwesomeIcon
                                            className="text-index "
                                            icon={faInstagram}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:px-[36rem] pt-3 pb-2.5 flex-col bg-white justify-start items-start inline-flex"'>
                <div className="text-slate-700 text-[1.6rem] font-normal leading-[2.1rem]">
                    © Bản quyền thuộc về The Green Crazw
                </div>
            </div>
        </div>
    );
}
export default Footer;
