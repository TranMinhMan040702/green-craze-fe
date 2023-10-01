function OrderSummary() {
    return (
        <div className=" bg-white border-b-[0.1rem]">
            <div className="bg-[#FDF7E8] p-[2rem] flex flex-col items-end gap-[2.2rem]">
                <div className="flex gap-[11rem] max-[396px]:gap-[6rem] text-black text-[1.6rem] font-medium">
                    <p>Tổng tiền hàng</p>
                    <span>75.000đ</span>
                </div>
                <div className="flex gap-[11rem] max-[396px]:gap-[6rem] text-black text-[1.6rem] font-medium">
                    <p>Phí vận chuyển</p>
                    <span>15.000đ</span>
                </div>
                <div className="flex gap-[6.2rem] max-[396px]:gap-[1.2rem] text-black items-center">
                    <p className="text-[1.6rem] font-medium">Tổng thanh toán</p>
                    <span className="text-[2.6rem] text-rose-600 font-bold">90.000đ</span>
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;
