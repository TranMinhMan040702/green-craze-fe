

function Info(){
    return <div className="flex max-md:flex-col justify-between p-[2rem] border-t-[0.1rem]">
        <div>
            <h1 className="capitalize text-[2rem] text-black">Địa chỉ nhận hàng</h1>
            <div className="text-[1.6rem]">
                <h2 className="font-medium text-[1.8rem]">Nguyễn Minh Sơn</h2>
                <p className="my-[0.5rem]">0354964840</p>
                <p>Tà Đảnh, Tri Tôn, An Giang</p>
            </div>
        </div>
        <div className="md:text-right">
            <h1 className="capitalize text-[2rem] text-black">Thông tin đơn hàng</h1>
            <div className="bg-[#FFFAF4] p-[2rem] flex flex-col gap-[2.2rem]">
                <div className="flex gap-[11rem] text-[1.6rem] font-normal">
                    <p>Tổng tiền hàng</p>
                    <span>75.000đ</span>
                </div>
                <div className="flex gap-[11rem] text-[1.6rem] font-normal">
                    <p>Phí vận chuyển</p>
                    <span>15.000đ</span>
                </div>
                <div className="flex gap-[6.2rem] items-center">
                    <p className="text-[1.6rem]">Tổng thanh toán</p>
                    <span className="text-[2.6rem] text-rose-600 font-bold">90.000đ</span>
                </div>
            </div>
        </div>
    </div>
}

export default Info;