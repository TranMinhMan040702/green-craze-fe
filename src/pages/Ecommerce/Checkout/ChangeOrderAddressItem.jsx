import { Checkbox, Radio } from 'antd';
import { useEffect, useState } from 'react';
import AddressForm from '../Address/AddressForm';

function ChangeOrderAddressItem({
    address,
    setIsModalOpen,
    isLastItem = false,
    isDefault = false,
}) {
    const [isFormOpen, setIsFormOpen] = useState({
        isOpen: false,
        id: address?.id,
    });

    useEffect(() => {
        setIsModalOpen(!isFormOpen.isOpen);
    }, [isFormOpen]);

    return (
        <Radio value={address?.id} className="radio-address-item w-full">
            <div
                className={`flex justify-between ${
                    isLastItem || 'border-b-[0.1rem] border-b-gray-300'
                } py-[2.5rem] mx-[2.1rem] items-center`}
            >
                <div className="text-[1.6rem]">
                    <div className="flex items-center text-[1.6rem]">
                        <span className="font-medium">{address?.receiver}</span>
                        <span className="mx-[1.5rem] font-normal block h-[2.5rem] border-l-[0.01rem] border-gray-600"></span>
                        <span>{address?.phone}</span>
                    </div>
                    <div className="py-[1.3rem] text-[1.4rem] font-normal">
                        <p>{address?.street}</p>
                        <p>{`${address?.ward?.name}, ${address?.district?.name}, ${address?.province?.name}`}</p>
                    </div>
                    {isDefault && (
                        <div>
                            <span className="address-default border-[var(--primary-color)] text-[var(--primary-color)] border-[0.2rem] px-[1rem] py-[0.3rem]">
                                Mặc định
                            </span>
                        </div>
                    )}
                </div>
                <div className="text-right">
                    <div className="flex justify-end gap-[1rem]">
                        <p
                            onClick={() => setIsFormOpen({ isOpen: true, id: address?.id })}
                            className="m-0 text-blue-800 text-[1.6rem] font-normal cursor-pointer"
                        >
                            Cập nhật
                        </p>
                    </div>
                </div>
            </div>
            <AddressForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </Radio>
    );
}

export default ChangeOrderAddressItem;
