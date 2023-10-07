import { Button, Modal } from 'antd';

function ConfirmPrompt({ isDisableOpen, setIsDisableOpen, content }) {
    return (
        <Modal
            title={<p className="text-center text-[2rem] mb-6">Xác nhận</p>}
            open={isDisableOpen}
            onCancel={() => setIsDisableOpen(false)}
            footer={[
                <Button
                    type="primary"
                    className="bg-red-500 text-white"
                    onClick={() => setIsDisableOpen(false)}
                >
                    Huỷ
                </Button>,
                <Button type="primary" className="bg-green-500 text-white">
                    Xác nhận
                </Button>,
            ]}
        >
            <p className="text-[1.6rem]">{content}</p>
        </Modal>
    );
}

export default ConfirmPrompt;
