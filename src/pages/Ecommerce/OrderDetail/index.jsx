import { useParams } from 'react-router-dom';
import config from '../../../config';
import AccountLayout from '../../../layouts/Ecommerce/AccountLayout';
import Contact from './Contact';
import Head from './Head';
import Info from './Info';
import OrderStatus from './OrderStatus';
import Wrapper from './Wrapper';
import './orderdetail.scss';
import { useGetOrderByCode } from '../../../hooks/api';

function OrderDetailPage() {
    const { code } = useParams();
    const { data, isLoading } = useGetOrderByCode(code);
    return (
        <AccountLayout routeKey={config.routes.web.order} isSetMinHeight={false}>
            <div className="order-detail-container">
                <Head code={data?.data?.code} status={data?.data?.status} />
                <OrderStatus order={data?.data} />
                <Contact />
                <Wrapper orderItems={data?.data?.items} status={data?.data?.status}/>
                <Info order={data?.data} />
            </div>
        </AccountLayout>
    );
}

export default OrderDetailPage;
