import ProductItem from "./ProductItem";


function OrderProducts(){
    return <div className="my-[3.4rem] bg-white rounded-[0.3rem] shadow-[0px_0px_2px_0px_#0000004D]">
        <div className="grid grid-cols-5 p-[2rem] text-black font-medium text-opacity-60 text-[1.6rem] text-center">
            <p className="col-span-2 text-left text-[2rem] font-medium text-[#537F44]">Sản phẩm</p>
            <p>Đơn giá</p>
            <p className="xl:ml-[6rem]">Số lượng</p>
            <p className="text-right">Thành tiền</p>
        </div>
        <div>
            <ProductItem />
            <ProductItem isLastItem/>
        </div>
    </div>   
}

export default OrderProducts;