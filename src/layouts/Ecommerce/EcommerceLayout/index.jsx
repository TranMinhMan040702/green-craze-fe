import Header from '../components/Header';
import Footer from '../components/Footer';
import './ecommercelayout.scss';
import Header from '../components/Header';

function EcommerceLayout({ children }) {
    return (
        <>
            <Header />
            <div className="main">
                <div className="container min-h-screen mx-auto">{children}</div>
            </div>
            <Footer />
        </>
    );
}

export default EcommerceLayout;
