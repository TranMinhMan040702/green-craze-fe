import { Card } from 'antd';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Group A', value: 100 },
    { name: 'Group B', value: 500 },
    { name: 'Group C', value: 400 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 200 },
];

const COLORS = ['#91c864', '#8155b2 ', '#64c6ec', '#e9c6be', '#faca51'];

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

function StatisticTopSellingCaterory() {
    return (
        <Card bordered={false}>
            <h5 className="font-medium text-center text-[1.6rem] w-[340px]">
                Top thể loại được mua nhiều nhất
            </h5>
            <PieChart width={340} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </Card>
    );
}

export default StatisticTopSellingCaterory;
