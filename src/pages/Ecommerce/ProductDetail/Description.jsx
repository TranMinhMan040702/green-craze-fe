import { Button } from 'antd';
import RecommentProduct from '../../../layouts/Ecommerce/components/RecommentProduct';

function Description() {
    return (
        <div className="description-product mt-[3rem] pt-[2rem] border-t-[1px]">
            <div className="grid grid-cols-12">
                <div className="col-span-9 max-lg:col-span-12 pr-[1rem] border-r-[1px] max-lg:border-none">
                    <h2 className="text-[2.6rem] font-medium">Mô tả sản phẩm</h2>
                    <div className="text-[1.6rem] h-[500px] overflow-hidden">
                        Thị trường ngày càng có nhiều đơn vị cung cấp các loại hộp đựng cơm, hộp
                        giấy đựng thực phẩm và cả hộp đựng thức ăn bằng giấy với nhiều chất lượng
                        cùng thương hiệu khác nhau. Trong số đó có hộp giấy đựng cơm 3 ngăn Fest Bio
                        1000ml + nắp PET là sản phẩm được quan tâm và tìm kiếm nhiều nhất. Để hiểu
                        rõ hơn về sản phẩm này cũng như chọn mua mặt hàng tốt nhất, cùng tham khảo
                        bài viết nhé. Giới thiệu về hộp đựng thực phẩm 3 ngăn Fest BIO có nắp PET
                        Hộp giấy đựng cơm 3 ngăn hiện đang là sản phẩm được rất nhiều nhà hàng, quán
                        ăn lựa chọn thay thế cho các loại hộp nhựa thông thường. Hộp giấy 3 ngăn
                        Fest Bio được tạo ra từ 100% bột gỗ cây bạch đàn, hoàn toàn không chứa hóa
                        chất độc hại. Chất liệu giấy thân thiện với môi trường, an toàn cho người sử
                        dụng. Hộp giấy được thiết kế theo dạng 1 ngăn lớn và 2 ngăn nhỏ tiện lợi,
                        thích hợp cho việc đựng và phân chia đồ ăn. Hộp Fest Bio có khả năng tự phân
                        hủy trong vòng 60 ngày trong đất, giúp giảm thiểu tối đa lượng chất thải ra
                        môi trường và góp phần vào mục tiêu bảo vệ môi trường theo các thiết thực
                        nhất. Thông tin cơ bản Nhà sản xuất: Tập đoàn SCG Thái Lan Nhập khẩu: Công
                        ty TNHH ECO PRO Mã sản phẩm: HM003 Chất liệu: 100% giấy bột giấy nguyên chất
                        từ cây bạch đàn, không sử dụng hóa chất độc hại kết hợp nắp nhựa PET trong
                        Dung tích: 1000ml Kích thước sản phẩm: R167xD227xC54 mm Đóng gói: 150 cái/
                        thùng [25 cái/ lốc * 6 lốc/ thùng] Kích thước thùng: 587x462x364 mm
                    </div>
                    <div className="text-center my-[2.6rem]">
                        <Button
                            className="shadow-none hover:text-lime-700 hover:border-lime-700"
                            shape="round"
                        >
                            Xem thêm
                        </Button>
                    </div>
                </div>
                <div className="col-span-3 max-lg:col-span-12 pl-[1rem]">
                    <RecommentProduct />
                </div>
            </div>
        </div>
    );
}

export default Description;
