import { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import Item from './Item';
const columns = [
    {
        title: 'Tất cả',
        dataIndex: 'item',
        render: (text) => <a>{text}</a>,
    }
];
const data = [
    {
        key: '1',
        item: <Item />,
    },
    {
        key: '2',
        item: <Item />,
    }
];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        item: record.name,
    }),
};

function Info() {
    const [selectionType, setSelectionType] = useState('checkbox');
    return (
        <div className='w-[75rem] max-md:w-[100%]'>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                pagination={false}
            >
            </Table>
        </div>
    );
}

export default Info;
