import config from "../../../config";
import AccountLayout from "../../../layouts/Ecommerce/AccountLayout";
import Contact from "./Contact";
import Head from "./Head";
import Info from "./Info";
import OrderStatus from "./OrderStatus";
import Wrapper from "./Wrapper";
import './orderdetail.scss'

function OrderDetailPage() {
    return <AccountLayout routeKey={config.routes.web.order} isSetMinHeight={false}>
        <div className="order-detail-container">
            <Head />
            <OrderStatus />
            <Contact />
            <Wrapper />
            <Info />
        </div>
    </AccountLayout>
}

export default OrderDetailPage;