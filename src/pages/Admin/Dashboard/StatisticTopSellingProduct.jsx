import { Card } from 'antd';
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        date: '2000-01',
        a: 4000,
        b: 2400,
        c: 2000,
        d: 1400,
        e: 1400,
    },
    {
        date: '2000-02',
        a: 3000,
        b: 2500,
        c: 2800,
        d: 2400,
        e: 1000,
    },
    {
        date: '2000-03',
        a: 4500,
        b: 2000,
        c: 2500,
        d: 2400,
        e: 3400,
    },
    {
        date: '2000-04',
        a: 3600,
        b: 1400,
        c: 2500,
        d: 1800,
        e: 1300,
    },
    {
        date: '2000-05',
        a: 4600,
        b: 2800,
        c: 1800,
        d: 1700,
        e: 2400,
    },
    {
        date: '2000-06',
        a: 3200,
        b: 2200,
        c: 2400,
        d: 1800,
        e: 1900,
    },
    {
        date: '2000-07',
        a: 4200,
        b: 1400,
        c: 1300,
        d: 1800,
        e: 1200,
    },
    {
        date: '2000-08',
        a: 4000,
        b: 1600,
        c: 2300,
        d: 1900,
        e: 1200,
    },
    {
        date: '2000-09',
        a: 3100,
        b: 2700,
        c: 1900,
        d: 2500,
        e: 3000,
    },
    {
        date: '2000-10',
        a: 4400,
        b: 2900,
        c: 2100,
        d: 1200,
        e: 2100,
    },
    {
        date: '2000-11',
        a: 2800,
        b: 3000,
        c: 2300,
        d: 1100,
        e: 2800,
    },
    {
        date: '2000-12',
        a: 4500,
        b: 2100,
        c: 2800,
        d: 1700,
        e: 2400,
    },
];

const monthTickFormatter = (tick) => {
    const date = new Date(tick);

    return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
    const { x, y, payload } = tickProps;
    const { value, offset } = payload;
    const date = new Date(value);
    const month = date.getMonth();
    const quarterNo = Math.floor(month / 3) + 1;
    const isMidMonth = month % 3 === 1;

    if (month % 3 === 1) {
        return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
    }

    const isLast = month === 11;

    if (month % 3 === 0 || isLast) {
        const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

        return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
    }
    return null;
};

function StatisticTopSellingProduct() {
    return (
        <Card bordered={false}>
            <h5 className="font-medium text-center text-[1.6rem] w-[700px]">
                Top các sản phẩm bán chạy nhất
            </h5>
            <BarChart width={700} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
                <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    interval={0}
                    tick={renderQuarterTick}
                    height={1}
                    scale="band"
                    xAxisId="quarter"
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="a" stackId="a" fill="#a6a6a4" />
                <Bar dataKey="b" stackId="a" fill="#7258db" />
                <Bar dataKey="c" stackId="a" fill="#e5df88" />
                <Bar dataKey="d" stackId="a" fill="#ed5782" />
                <Bar dataKey="e" stackId="a" fill="#ff9966" />
            </BarChart>
        </Card>
    );
}

export default StatisticTopSellingProduct;
