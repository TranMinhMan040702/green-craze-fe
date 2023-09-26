import Footer from '../components/Footer';
import Header from '../components/Header';

function EcommerceLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container min-h-screen mx-auto">{children}</div>
            <Footer />
        </>
    );
}

export default EcommerceLayout;
