function ProductItem({isLastItem = false}) {
    return (
        <div className={`${!isLastItem ? 'border-b-[0.1rem]' : 'pb-[3.7rem]'} grid grid-cols-5 text-center py-[1.1rem] mx-[2rem]`}>
            <div className="flex max-md:flex-col gap-[2.2rem] items-center col-span-2">
                <img className="w-[7.9rem] h-[7.9rem] " src="https://via.placeholder.com/79x79" />
                <div className="md:text-left">
                    <p className="text-black text-[1.5rem] font-medium">
                        Ly giấy Kraft 360ml - 12oz ripple wall
                    </p>
                    <p className="text-[1.2rem] text-black mb-[1rem] mt-[.6rem]">Lốc - 25 cái</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <p className="text-rose-600 font-bold text-[1.4rem]">75.000đ</p>
            </div>
            <div className="flex justify-center xl:ml-[6rem] items-center">
                <p className="text-rose-600 font-bold text-[1.4rem]">1 Lốc</p>
            </div>
            <div className="flex justify-end items-center">
                <p className="text-rose-600 font-bold text-[1.4rem]">75.000đ</p>
            </div>
        </div>
    );
}

export default ProductItem;
