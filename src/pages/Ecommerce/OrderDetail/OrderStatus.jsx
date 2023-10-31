import { faStar } from '@fortawesome/free-regular-svg-icons';
import {
    faCancel,
    faDownload,
    faReceipt,
    faSpinner,
    faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Steps } from 'antd';
import { useEffect, useState } from 'react';
import { ORDER_STATUS, getOrderStatus } from '../../../utils/constants';

function OrderStatus({ order }) {
    return (
        <div className="order-status-container xl:px-[7rem] py-10 bg-white mx-auto my-5">
            <Steps current={getOrderStatus(order?.status)?.key}>
                <Steps.Step
                    className={ORDER_STATUS.NOT_PROCESSED == order?.status && 'current-step'}
                    title={
                        <div className="text-gray-400 text-[1.2rem]">
                            <p>{new Date(order?.createdAt).toLocaleDateString()}</p>
                            <p>{new Date(order?.createdAt).toLocaleTimeString()}</p>
                        </div>
                    }
                    icon={<FontAwesomeIcon icon={faReceipt} className='w-8 h-8'/>}
                />
                {order?.status === ORDER_STATUS.CANCELLED ? (
                    <Steps.Step
                        className="current-step"
                        icon={<FontAwesomeIcon icon={faCancel} className='w-8 h-8' />}
                    />
                ) : (
                    <>
                        <Steps.Step
                            className={ORDER_STATUS.PROCESSING == order?.status && 'current-step'}
                            icon={<FontAwesomeIcon icon={faSpinner} className='w-8 h-8' />}
                        />
                        <Steps.Step
                            className={ORDER_STATUS.SHIPPED == order?.status && 'current-step'}
                            icon={<FontAwesomeIcon icon={faTruck} className='w-8 h-8' />}
                        />
                        <Steps.Step
                            className={ORDER_STATUS.DELIVERED == order?.status && 'current-step'}
                            title={
                                <div className="text-gray-400 text-[1.2rem]">
                                    <p>
                                        {order?.transaction?.completedAt &&
                                            new Date(
                                                order?.transaction?.completedAt,
                                            ).toLocaleDateString()}
                                    </p>
                                    <p>
                                        {order?.transaction?.completedAt &&
                                            new Date(
                                                order?.transaction?.completedAt,
                                            ).toLocaleTimeString()}
                                    </p>
                                </div>
                            }
                            icon={<FontAwesomeIcon icon={faDownload}  className='w-8 h-8'/>}
                        />
                        <Steps.Step
                            className={!getOrderStatus(order?.status) && 'current-step'}
                            icon={<FontAwesomeIcon icon={faStar} className='w-8 h-8' />}
                        />
                    </>
                )}
            </Steps>
        </div>
    );
}

export default OrderStatus;
