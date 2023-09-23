import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss';
import { faLocationPin, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer-container w-screen fixed bottom-0">
            <div className="wrapper w-full h-[418.09px] px-[360px] pt-10 pb-2.5 flex-col justify-start items-start inline-flex">
                <div className="justify-start items-start inline-flex">
                    <div className="w-[300px] h-[368.09px] relative">
                        <div className="left-5 uppercase top-0 absolute text-white text-3xl font-medium leading-snug">
                            VỀ CHÚNG TÔI
                        </div>
                        <img
                            className="w-[100px] h-[87.50px] left-3 top-[38.59px] absolute"
                            src="https://via.placeholder.com/100x87"
                        />
                        <div className="pr-[3px] left-3 top-[142.09px] absolute flex-col justify-start items-start inline-flex">
                            <div className="text-white text-[15px] font-normal leading-snug">
                                CÔNG TY TNHH THE GREEN CRAZE
                                <br />
                                MST: 0315701288 Do sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp
                                ngày 12 tháng 08 năm 2021
                            </div>
                        </div>
                        <div className="left-3 top-[248.09px] absolute justify-start items-baseline gap-[5px] inline-flex">
                            <div className="w-5 mr-5 flex-col justify-start items-start inline-flex">
                                <div className="text-white text-[15px] font-black leading-[15px]">
                                    <FontAwesomeIcon icon={faLocationPin} />
                                </div>
                            </div>
                            <div className="pr-px flex-col justify-start items-start inline-flex">
                                <div className="text-white text-[15px] font-normal leading-snug">
                                    Số 1 Võ Văn Ngân, P. Linh Chiểu, TP.Thủ Đức, TP.HCM
                                </div>
                            </div>
                        </div>
                        <div className="pr-[68px] left-3 top-[303.09px] absolute justify-start items-baseline gap-[5px] inline-flex">
                            <div className="w-5 mr-5 flex-col justify-start items-start inline-flex">
                                <div className="text-white text-[15px] font-black leading-[15px]">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="text-white text-[15px] font-normal leading-snug">
                                    093 858 7191
                                </div>
                            </div>
                        </div>
                        <div className="pr-[60px] left-3 top-[335.59px] absolute justify-start items-baseline gap-[5px] inline-flex">
                            <div className="w-5 mr-5 flex-col justify-start items-start inline-flex">
                                <div className="text-white text-[15px] font-black leading-[15px]">
                                    <FontAwesomeIcon icon={faMailBulk} />
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="text-white text-[15px] font-normal leading-snug">
                                    xinchao@greencraze.vn
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-2.5 pb-36 flex-col justify-start items-start gap-[16.59px] inline-flex">
                        <div className="text-white uppercase text-3xl font-medium leading-snug">
                            HƯỚNG DẪN
                        </div>
                        <div className="pr-[74px] flex-col justify-start items-start gap-[9.50px] flex">
                            <div className="text-index text-white text-[15px] transition-all font-normal leading-snug">
                                Điều Khoản
                            </div>
                            <div className="text-index text-white text-[15px] font-normal leading-snug">
                                Mua Hàng và Thanh Toán
                            </div>
                            <div className="text-index text-white text-[15px] font-normal leading-snug">
                                Chính Sách Giao Hàng
                            </div>
                            <div className="text-index text-white text-[15px] font-normal leading-snug">
                                Chính Sách Đổi Trả
                            </div>
                            <div className="text-index text-white text-[15px] font-normal leading-snug">
                                Chính Sách Hoàn Tiền
                            </div>
                            <div className="text-index text-white text-[15px] font-normal leading-snug">
                                Chính Sách Bảo Mật Thông Tin
                            </div>
                        </div>
                    </div>
                    <div className="px-2.5 pb-[241.50px] flex-col justify-start items-start gap-[16.59px] inline-flex">
                        <div className="text-white uppercase text-3xl font-medium leading-snug">
                            THÔNG TIN
                        </div>
                        <div className="pr-[203px] flex-col justify-start items-start gap-[9.50px] flex">
                            <div className="text-index text-white text-[15px] font-normal leading-snug">
                                Trang chủ
                            </div>
                            <div className="text-index text-white text-[15px] font-normal leading-snug">
                                Giới thiệu
                            </div>
                            <div className="text-index text-white text-[15px] font-normal leading-snug">
                                Tuyển dụng
                            </div>
                        </div>
                    </div>
                    <div className="px-2.5 pb-[260.96px] flex-col justify-start items-start gap-[25.04px] inline-flex">
                        <div className="flex-col justify-start items-start gap-[16.59px] flex">
                            <div className="text-white uppercase text-3xl font-medium leading-snug">
                                Theo dõi chúng tôi
                            </div>
                            <div className="pr-[141.25px] justify-start items-start inline-flex">
                                <div className="self-stretch pt-[5px] pb-[7.50px] flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-[25px] font-normal leading-[25px]">
                                        <FontAwesomeIcon
                                            className="text-index "
                                            icon={faFacebook}
                                        />
                                    </div>
                                </div>
                                <div className="self-stretch pl-4 pt-[5px] pb-[7.50px] flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-[25px] font-normal leading-[25px]">
                                        <FontAwesomeIcon className="text-index " icon={faTwitter} />
                                    </div>
                                </div>
                                <div className="self-stretch pl-4 pt-[5px] pb-[7.50px] flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-[25px] font-normal leading-[25px]">
                                        <FontAwesomeIcon className="text-index " icon={faTwitch} />
                                    </div>
                                </div>
                                <div className="self-stretch pl-4 pt-[5px] pb-[7.50px] flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-[25px] font-normal leading-[25px]">
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
            <div className='w-full px-[360px] pt-3 pb-2.5 flex-col justify-start items-start inline-flex"'>
                <div className="text-slate-700 text-2xl font-normal font-['Roboto'] leading-[21px]">
                    © Bản quyền thuộc về The Green Crazw
                </div>
            </div>
        </div>
    );
}
export default Footer;
