import { Input, InputNumber } from 'antd';
import { useState } from 'react';

function Item() {
    const [count, setCount] = useState(1);
    return (
        <div
            className={`flex items-center justify-between gap-[2.2rem] hover:cursor-default rounded-[0.5rem]`}
        >
            <div className="flex gap-[2.2rem] max-[440px]:flex-col items-center">
                <img className="w-[7.9rem] h-[7.9rem] " src="https://via.placeholder.com/79x79" />
                <div className="">
                    <p className="text-black text-[1.5rem] font-medium">
                        Ly giấy Kraft 360ml - 12oz ripple wall
                    </p>
                    <p className="text-[1.2rem] text-black mb-[1rem] mt-[.6rem]">Lốc: 25 cái</p>
                    <p className="text-rose-600 text-opacity-70 font-medium text-[1.4rem]">
                        75.000đ
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-[5rem]">
                <div className="text-right">
                    <p className="text-rose-600 text-[1.4rem] font-bold mb-0">75.000đ</p>
                    <div className="flex items-center gap-[0.7rem] mt-[1.2rem]">
                        <button
                            onClick={() => setCount((value) => (value - 1 > 0 ? value - 1 : value))}
                            className="h-[2rem] w-[2rem] rounded-sm bg-white text-black border-none shadow-[0px_0px_2px_0px_#0000004D]"
                        >
                            -
                        </button>
                        <Input
                            className="w-[3rem] h-[2rem] rounded-sm focus:outline-none focus-within:border-none text-center text-black border-none text-[1.5rem] font-medium shadow-[0px_0px_2px_0px_#0000004D]"
                            value={count}
                            min={1}
                        />
                        <button
                            onClick={() => setCount((value) => value + 1)}
                            className="h-[2rem] w-[2rem] rounded-sm bg-white cursor-pointer text-black border-none shadow-[0px_0px_2px_0px_#0000004D]"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div>
                    <span className="text-black cursor-pointer hover:text-red-300">Xoá</span>
                </div>
            </div>
        </div>
    );
}

export default Item;
