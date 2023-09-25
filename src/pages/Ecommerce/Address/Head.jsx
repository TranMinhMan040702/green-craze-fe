import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function Head() {
    return (
        <div className="border-b-[0.1rem] py-[2.5rem] pl-[1.9rem] pr-[2.7rem] flex justify-between">
            <h1 className="capitalize m-0 pt-[0.7rem] pb-[0.4rem]">Địa chỉ của tôi</h1>
            <Button
                icon={<PlusOutlined />}
                className="text-[1.4rem] w-[203px] h-[38px] text-white bg-orange-600 rounded-[3px]"
            >
                Thêm địa chỉ mới
            </Button>
        </div>
    );
}

export default Head;
