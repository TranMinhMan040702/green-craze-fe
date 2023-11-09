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
    Label,
    LineChart,
    Line,
} from 'recharts';

const data = [
    {
        date: '2000-01',
        revenue: 4000,
        exchange: 2400,
    },
    {
        date: '2000-02',
        revenue: 3000,
        exchange: 1398,
    },
    {
        date: '2000-03',
        revenue: 2000,
        exchange: 9800,
    },
    {
        date: '2000-04',
        revenue: 2780,
        exchange: 3908,
    },
    {
        date: '2000-05',
        revenue: 1890,
        exchange: 4800,
    },
    {
        date: '2000-06',
        revenue: 2390,
        exchange: 3800,
    },
    {
        date: '2000-07',
        revenue: 3490,
        exchange: 4300,
    },
    {
        date: '2000-08',
        revenue: 4000,
        exchange: 2400,
    },
    {
        date: '2000-09',
        revenue: 3000,
        exchange: 1398,
    },
    {
        date: '2000-10',
        revenue: 2000,
        exchange: 9800,
    },
    {
        date: '2000-11',
        revenue: 2780,
        exchange: 3908,
    },
    {
        date: '2000-12',
        revenue: 1890,
        exchange: 4800,
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

function StatisticRevenue() {
    return (
        <Card bordered={false}>
            <h5 className="font-medium text-center text-[1.6rem] w-[700px]">
                Thống kê doanh thu và chi phí theo năm
            </h5>
            {/* <BarChart width={700} height={300} data={data}>
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
                <Bar name="Doanh thu" dataKey="revenue" fill="rgb(25,135,84)" />
                <Bar name="Chi phí" dataKey="exchange" fill="rgb(220,53,69)" />
            </BarChart> */}

            <LineChart
                width={700}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
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
                <Line
                    name="Doanh thu"
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line name="Chi phí" type="monotone" dataKey="exchange" stroke="#82ca9d" />
            </LineChart>
        </Card>
    );
}

export default StatisticRevenue;
