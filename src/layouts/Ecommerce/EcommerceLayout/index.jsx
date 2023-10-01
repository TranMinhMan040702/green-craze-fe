import Header from '../components/Header';
import Footer from '../components/Footer';
import './ecommercelayout.scss';
import BreadCrumb from '../components/Breadcrumb';

function EcommerceLayout({ children }) {
    let items = [
        {
            title: 'Trang chủ',
        },
        {
            title: 'Hộp giấy',
        },
    ];
    return (
        <>
            <Header />
            <div className="main">
                <BreadCrumb items={items} />
                <div className="container min-h-screen mx-auto">{children}</div>
            </div>
            <Footer />
        </>
    );
}

export default EcommerceLayout;
