import { Button } from 'antd';

function Item({ isLastItem = false, isDefault = false }) {
    return (
        <div
            className={`flex justify-between ${
                isLastItem || 'border-b-[0.1rem] border-b-gray-300'
            } py-[2.5rem] mx-[2.1rem] items-center`}
        >
            <div className="text-[1.6rem]">
                <div className="flex justify-center items-center text-[1.6rem]">
                    <span className="font-medium">Nguyễn Minh Sơn</span>
                    <span className="mx-[1.5rem] font-normal block h-[2.5rem] border-l-[0.01rem] border-gray-600"></span>
                    <span>0354964840</span>
                </div>
                <div className="py-[1.3rem] text-[1.4rem] font-normal">
                    <p>Cầu đường thép</p>
                    <p>Tân Lập, Tịnh Biên, An Giang</p>
                </div>
                {
                    isDefault && 
                    <div>
                        <span className="address-default border-[0.2rem] px-[1rem] py-[0.3rem]">
                            Mặc định
                        </span>
                    </div>
                }
            </div>
            <div className="text-right">
                <div className='flex justify-end gap-[1rem]'>
                    <p className="m-0 text-blue-800 text-[1.6rem] font-normal cursor-pointer">
                        Cập nhật
                    </p>
                    <p className="m-0 text-blue-800 text-[1.6rem] font-normal cursor-pointer">
                        Xoá
                    </p>
                </div>
                <Button disabled={isDefault} className={`btn-default ${isDefault ? 'bg-gray-200' : 'bg-transparent'} text-black  text-[1.6rem] w-[16rem] h-[4rem] mt-[1rem]`}>
                    Thiết lập mặc định
                </Button>
            </div>
        </div>
    );
}

export default Item;
