import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function Head() {
    return (
        <div className="border-b-[0.1rem] py-[2.5rem] pl-[1.9rem] pr-[2.1rem] flex justify-between items-center">
            <h1 className="capitalize m-0 py-[0.7rem] ">Địa chỉ của tôi</h1>
            <Button
                icon={<PlusOutlined />}
                className="text-[1.6rem] border-none w-[20.3rem] h-[3.8rem] text-white bg-orange-600 rounded-[0.5rem]"
            >
                Thêm địa chỉ mới
            </Button>
        </div>
    );
}

export default Head;
