import { faStar } from '@fortawesome/free-regular-svg-icons';
import {
    faCancel,
    faDownload,
    faReceipt,
    faSpinner,
    faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const CREATED = 0;
const PENDING = 0.25;
const ON_THE_WAY = 0.5;
const DELIVERED = 0.75;
const CANCELLED = 1.01;
const REVIEW = 1;

const getPercent = (name) => {
    switch (name) {
        case 'Created':
            return CREATED;
        case 'Pending':
            return PENDING;
        case 'On the way':
            return ON_THE_WAY;
        case 'Delivered':
            return DELIVERED;
        case 'Cancelled':
            return CANCELLED;
        case 'Review':
            return REVIEW;
        default:
            return CREATED;
    }
}
function OrderStatus({ name = 'Pending' }) {
    const [currentPercent, setCurrentPercent] = useState(getPercent(name));
    useEffect(() => {
        setCurrentPercent(getPercent(name));
    }, [name]);
    return (
        <div className="order-status-container xl:px-[9rem] py-10 bg-white max-w-screen-xl mx-auto my-5">
            <div className="stepper">
                <div className="stepper__step">
                    <div
                        className={`stepper__step-icon ${
                            currentPercent === CREATED
                                ? 'stepper__step-icon--pending'
                                : currentPercent > CREATED && 'stepper__step-icon--finish'
                        }`}
                    >
                        <FontAwesomeIcon icon={faReceipt} />
                    </div>
                    <div className="stepper__step-text text-[1.4rem]">Đơn hàng đã đặt</div>
                    <div className="stepper__step-date">{new Date().toLocaleString()}</div>
                </div>
                {currentPercent !== CANCELLED ? (
                    <>
                        <div className="stepper__step">
                            <div
                                className={`stepper__step-icon ${
                                    currentPercent === PENDING
                                        ? 'stepper__step-icon--pending'
                                        : currentPercent > PENDING && 'stepper__step-icon--finish'
                                }`}
                            >
                                <FontAwesomeIcon icon={faSpinner} />
                            </div>
                            <div className="stepper__step-text text-[1.4rem]">
                                Đơn hàng đang xử lý
                            </div>
                        </div>
                        <div className="stepper__step">
                            <div
                                className={`stepper__step-icon ${
                                    currentPercent === ON_THE_WAY
                                        ? 'stepper__step-icon--pending'
                                        : currentPercent > ON_THE_WAY &&
                                          'stepper__step-icon--finish'
                                }`}
                            >
                                <FontAwesomeIcon icon={faTruck} />
                            </div>
                            <div className="stepper__step-text text-[1.4rem]">
                                Đơn hàng đang giao
                            </div>
                        </div>
                        <div className="stepper__step">
                            <div
                                className={`stepper__step-icon ${
                                    currentPercent === DELIVERED
                                        ? 'stepper__step-icon--pending'
                                        : currentPercent > DELIVERED && 'stepper__step-icon--finish'
                                }`}
                            >
                                <FontAwesomeIcon icon={faDownload} />
                            </div>
                            <div className="stepper__step-text text-[1.4rem]">Đơn hàng đã giao</div>
                            <div className="stepper__step-date">{new Date().toLocaleString()}</div>
                        </div>
                        <div className="stepper__step">
                            <div
                                className={`stepper__step-icon ${
                                    currentPercent === REVIEW
                                        ? 'stepper__step-icon--pending'
                                        : currentPercent > REVIEW && 'stepper__step-icon--finish'
                                }`}
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="stepper__step-text text-[1.4rem]">Đánh giá</div>
                            <div className="stepper__step-date">{new Date().toLocaleString()}</div>
                        </div>
                    </>
                ) : (
                    <div className="stepper__step stepper__step--finish">
                        <div
                            className={`stepper__step-icon ${
                                currentPercent === CANCELLED
                                    ? 'stepper__step-icon--pending'
                                    : currentPercent > CANCELLED && 'stepper__step-icon--finish'
                            }`}
                        >
                            <FontAwesomeIcon icon={faCancel} />
                        </div>
                        <div className="stepper__step-text text-[1.4rem]">Đơn hàng đã huỷ</div>
                    </div>
                )}
                <div className="stepper__line">
                    <div className="stepper__line-background bg-gray-200"></div>
                    <div
                        className="stepper__line-foreground"
                        style={{
                            width: `calc((100% - 14rem) * calc(${currentPercent}))`,
                            background: '#F7941D',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default OrderStatus;
