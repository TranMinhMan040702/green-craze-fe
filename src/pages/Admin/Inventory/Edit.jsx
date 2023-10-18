import { Button, Form, InputNumber, Modal } from 'antd';

function Edit({ isEditOpen, setIsEditOpen }) {
    return (
        <Modal
            title={<p className="text-center text-[2rem] mb-6">Cập nhật kho hàng</p>}
            open={isEditOpen}
            onCancel={() => setIsEditOpen(false)}
            footer={[
                <Button type="primary" className="bg-yellow-500 text-white">
                    Cập nhật
                </Button>,
            ]}
        >
            <div>
                <Form
                    labelCol={{
                        span: 7,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                >
                    <Form.Item label="Số lượng trong kho">
                        <InputNumber
                            min={0}
                            style={{
                                width: 250,
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="Số lượng có thể bán">
                        <InputNumber
                            min={0}
                            style={{
                                width: 250,
                            }}
                        />
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
}

export default Edit;
