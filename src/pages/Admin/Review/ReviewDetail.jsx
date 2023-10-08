import { faClock, faStar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBox, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, Rate, Tag } from 'antd';

function ReviewDetail({ isDetailOpen, setIsDetailOpen }) {
    return (
        <Modal
            title={<p className="my-4 font-bold text-[1.6rem]">Chi tiết đánh giá ID 1</p>}
            width={800}
            open={isDetailOpen}
            onCancel={() => setIsDetailOpen(false)}
            footer={[
                <Button type="primary" className="bg-red-500 text-white">
                    OK
                </Button>,
            ]}
        >
            <div>
                <div className="flex items-center gap-[1.5rem]">
                    <div className="flex items-center">
                        <Tag color="green" className="text-2xl px-4 py-2">
                            <FontAwesomeIcon icon={faClock} />
                        </Tag>
                        <p>{new Date().toLocaleString()}</p>
                    </div>
                    <div className="flex items-center">
                        <Tag color="green" className="text-2xl px-4 py-2">
                            <FontAwesomeIcon icon={faUser} />
                        </Tag>
                        <p>NMS</p>
                    </div>
                    <div className="flex items-center">
                        <Tag color="green" className="text-2xl px-4 py-2">
                            <FontAwesomeIcon icon={faBox} />
                        </Tag>
                        <p>Ly Giấy</p>
                    </div>
                    <div className="flex items-center">
                        <Tag color="green" className="text-2xl px-4 py-2">
                            <FontAwesomeIcon icon={faStar} />
                        </Tag>
                        <Rate className="text-2xl" disabled defaultValue={2.5} allowHalf />
                    </div>
                </div>
                <div className="flex p-6 gap-[2rem]">
                    <FontAwesomeIcon className="text-5xl text-gray-500" icon={faQuoteLeft} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere felis
                        sed justo finibus, eget maximus diam rhoncus. Integer posuere tempor magna,
                        ut dictum massa suscipit vel. Sed quis placerat neque. Etiam urna sapien,
                        accumsan nec nulla in, condimentum venenatis ex.
                    </p>
                </div>
            </div>
        </Modal>
    );
}

export default ReviewDetail;
