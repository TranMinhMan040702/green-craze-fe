import { Card } from 'antd';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 200 },
];

const COLORS = ['#586177', '#ff9966', '#00cdd4', '#e9c6be', '#a2a2a2'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

function StatisticOrderStatus() {
    return (
        <Card bordered={false}>
            <h5 className="font-medium text-center text-[1.6rem] w-[340px]">
                Số lượng đơn hàng theo từng trạng thái
            </h5>
            <PieChart width={340} height={285}>
                <Pie
                    dataKey="value"
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                >
                    {data.map((entry, index) => (
                        <Cell
                            // name="5 sao"
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </Card>
    );
}

export default StatisticOrderStatus;
