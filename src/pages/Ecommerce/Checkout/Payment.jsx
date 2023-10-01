import { useState } from 'react';
import OrderSummary from './OrderSummary';
import { Button, Radio } from 'antd';
import { NavLink } from 'react-router-dom';
import config from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Payment() {
    const [value, setValue] = useState('COD');
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className="mt-[3.4rem] bg-white rounded-[0.3rem] shadow-[0px_0px_2px_0px_#0000004D]">
            <div className="flex items-center max-sm:flex-col max-md:gap-[2rem] max-xl:gap-[3rem] max-2xl:gap-[17rem] 2xl:gap-[30rem] p-[2rem] text-black font-medium text-opacity-60 text-[1.6rem]">
                <p className="text-[2rem] font-medium text-[#537F44]">Phương thức thanh toán</p>
                <div className="flex-auto">
                    <Radio.Group className="flex md:items-center max-md:flex-col justify-between" onChange={onChange} value={value}>
                        <Radio className="text-[1.6rem]" value={'COD'}>
                            Thanh toán khi nhận hàng
                        </Radio>
                        <Radio className="text-[1.6rem]" value={'MOMO'}>
                            Thanh toán MoMo
                        </Radio>
                        <Radio className="text-[1.6rem]" value={'PAYPAL'}>
                            Thanh toán Paypal
                        </Radio>
                    </Radio.Group>
                </div>
            </div>
            <OrderSummary />
            <div className='bg-[#FDF7E8] flex max-md:flex-col-reverse justify-end items-center py-[2rem] px-[1.2rem]'>
                <div className='text-[1.8rem] font-normal text-[#537F44B2]'>
                    <FontAwesomeIcon className='mr-[.3rem]' icon={faArrowLeft} />
                    <NavLink to={config.routes.web.cart}>Quay về giỏ hàng</NavLink>
                </div>
                <Button className='w-[21rem] h-[3.6rem] md:ml-[2.5rem] max-md:mb-[1rem] text-[1.8rem] font-normal bg-[#FF5722] text-white border-none rounded-none'>Đặt hàng</Button>
            </div>
        </div>
    );
}

export default Payment;
