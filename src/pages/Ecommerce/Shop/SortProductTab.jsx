import { Tabs } from 'antd';

const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: 'a',
        label: 'Tên A -> Z',
    },
    {
        key: 'b',
        label: 'Tên Z -> A',
    },
    {
        key: 'c',
        label: 'Giá tăng dần',
    },
    {
        key: 'd',
        label: 'Giá giảm dần',
    },
    {
        key: 'e',
        label: 'Hàng mới',
    },
];
function SortProductTab() {
    return (
        <div className="max-lg:hidden">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
}

export default SortProductTab;
