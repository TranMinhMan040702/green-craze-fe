import { Button, Modal, Table } from 'antd';
const baseColumns = [
    {
        title: 'Thuộc tính',
        dataIndex: 'property',
    },
    {
        title: 'Giá trị',
        dataIndex: 'value',
    },
];
function Detail({ isDetailOpen, setIsDetailOpen, rawData }) {
    return (
        <Modal
            title={<p className="text-center text-[2rem] mb-6">Thông tin chi tiết</p>}
            open={isDetailOpen}
            onCancel={() => setIsDetailOpen(false)}
            footer={[
                <Button type="primary" className="bg-red-500 text-white">
                    OK
                </Button>,
            ]}
        >
            <div className="detail-container">
                <Table pagination={false} columns={baseColumns} dataSource={rawData} />
            </div>
        </Modal>
    );
}

export default Detail;
