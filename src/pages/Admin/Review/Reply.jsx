import { faClock, faStar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Modal, Rate, Tag } from 'antd';

function Reply({ isReplyOpen, setIsReplyOpen }) {
    return (
        <Modal
            title={<p className="my-4 font-bold text-[1.6rem]">Phản hồi đánh giá ID 1</p>}
            width={800}
            open={isReplyOpen}
            onCancel={() => setIsReplyOpen(false)}
            okText="Thêm phản hồi"
            cancelText="Đóng"
            okButtonProps={{
                className: 'bg-red-500 text-white',
            }}
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
                <div className="flex pt-6 gap-[2rem]">
                    <Input.TextArea placeholder="Nhập nội dung phản hồi đánh giá" rows={4} />
                </div>
            </div>
        </Modal>
    );
}

export default Reply;
