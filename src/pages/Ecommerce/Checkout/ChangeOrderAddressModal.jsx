import { Button, Modal, Radio } from 'antd';
import { useGetListAddress } from '../../../hooks/api';
import ChangeOrderAddressItem from './ChangeOrderAddressItem';
import { useEffect, useState } from 'react';
import SpinLoading from '../../../layouts/Ecommerce/components/SpinLoading';

function ChangeOrderAddressModal({ isModalOpen, setIsModalOpen, chosenAddress, setChosenAddress }) {
    const addressAPI = useGetListAddress({
        status: true,
    });
    const [selectedAddress, setSelectedAddress] = useState(chosenAddress?.id);

    useEffect(() => {
        if(!addressAPI.data) return;

        let address = addressAPI?.data?.data?.items?.find((item) => item.id === chosenAddress?.id);
        setChosenAddress(address);

    }, [addressAPI.data]);

    const onCancel = () => {
        setIsModalOpen(false);
        setSelectedAddress(chosenAddress?.id);
    };

    const onChange = (e) => {
        const id = e.target.value;
        setSelectedAddress(id);
    };

    const onChosenAddress = () => {
        let address = addressAPI?.data?.data?.items?.find((item) => item.id === selectedAddress);
        setChosenAddress(address);
        setIsModalOpen(false);
    };

    return (
        <div>
            <Modal
                width={800}
                title={<p className="text-center text-[2rem] mb-6">Địa chỉ của tôi</p>}
                open={isModalOpen}
                footer={null}
            >
                {addressAPI?.isLoading ? (
                    <div className="text-center">
                        <SpinLoading />
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-col gap-[2.5rem]">
                            {addressAPI?.data?.data?.items?.map((address, index) => (
                                <Radio.Group onChange={onChange} value={selectedAddress}>
                                    <ChangeOrderAddressItem
                                        key={chosenAddress?.id}
                                        address={address}
                                        setIsModalOpen={setIsModalOpen}
                                        isLastItem={
                                            index === addressAPI?.data?.data?.items?.length - 1
                                        }
                                        isDefault={address?.isDefault}
                                    />
                                </Radio.Group>
                            ))}
                        </div>
                        <div className="flex justify-end items-center gap-[1rem]">
                            <Button onClick={onCancel} className="bg-white border-red-500 border hover:text-red-500 text-red-500">
                                Huỷ
                            </Button>
                            <Button
                                onClick={onChosenAddress}
                                className="bg-red-500 border-red-500 text-white min-w-[10%] hover:text-white"
                            >
                                Xác nhận
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default ChangeOrderAddressModal;
