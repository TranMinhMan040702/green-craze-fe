import './adminlayout.scss';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function AdminLayout({ children }) {
    return (
        <>
            <Header />
            <div className="main">
                <div className="grid grid-cols-12">
                    <div className="col-span-2">
                        <Navbar />
                    </div>
                    <div className="col-span-10 container mx-auto p-[1.5rem]">{children}</div>
                </div>
            </div>
        </>
    );
}

export default AdminLayout;
