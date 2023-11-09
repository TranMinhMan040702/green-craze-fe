import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { IconPackages, IconUsersGroup } from '@tabler/icons-react';
import { IconCreditCard } from '@tabler/icons-react';
import { IconBrandCashapp } from '@tabler/icons-react';
import { Card, Col, Row, Statistic, Tag } from 'antd';

function StatisticTotal() {
    return (
        <div>
            <Row gutter={16}>
                <Col span={6}>
                    <Card className="bg-[rgb(209,231,221)]" bordered={false}>
                        <Statistic
                            title="Doanh thu"
                            value={11.28}
                            precision={2}
                            valueStyle={{
                                color: '#0f5132',
                            }}
                            prefix={
                                <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-[rgb(25,135,84)]">
                                    <IconBrandCashapp className="text-white" />
                                </div>
                            }
                            suffix={
                                <Tag bordered={false} color="green">
                                    <ArrowUpOutlined />
                                    10%
                                </Tag>
                            }
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={false} className="bg-[rgb(248,215,218)]">
                        <Statistic
                            title="Chi phí"
                            value={9.3}
                            precision={2}
                            valueStyle={{
                                color: '#842029',
                            }}
                            prefix={
                                <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-[rgb(220,53,69)]">
                                    <IconCreditCard className="text-white" />
                                </div>
                            }
                            suffix={
                                <Tag bordered={false} color="orange">
                                    <ArrowDownOutlined />
                                    10%
                                </Tag>
                            }
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={false} className="bg-[rgb(255,243,205)]">
                        <Statistic
                            title="Khách hàng"
                            value={9.3}
                            precision={2}
                            valueStyle={{
                                color: '#055160',
                            }}
                            prefix={
                                <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-[rgb(255,193,7)]">
                                    <IconUsersGroup className="text-white" />
                                </div>
                            }
                            suffix={
                                <Tag bordered={false} color="green">
                                    <ArrowUpOutlined />
                                    10%
                                </Tag>
                            }
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={false} className="bg-[rgb(207,244,252)]">
                        <Statistic
                            title="Đơn hàng đã giao"
                            value={9.3}
                            precision={2}
                            valueStyle={{
                                color: '#664d03',
                            }}
                            prefix={
                                <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-[rgb(13,202,240)]">
                                    <IconPackages className="text-white" />
                                </div>
                            }
                            suffix={
                                <Tag bordered={false} color="green">
                                    <ArrowUpOutlined />
                                    10%
                                </Tag>
                            }
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default StatisticTotal;
