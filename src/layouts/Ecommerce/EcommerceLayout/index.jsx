import Footer from '../components/Footer';

function EcommerceLayout({ children }) {
    return (
        <>
            <div className="container min-h-screen mx-auto">
                <div>{children}</div>
            </div>
            <Footer />
        </>
    );
}

export default EcommerceLayout;
