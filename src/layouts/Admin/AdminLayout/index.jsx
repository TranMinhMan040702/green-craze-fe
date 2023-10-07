import './adminlayout.scss';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function AdminLayout({ children }) {
    return (
        <>
            <Header />
            <div className="main py-[58px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-2">
                        <Navbar />
                    </div>
                    <div className="w-full min-h-screen col-span-10 container mx-auto p-[1.5rem] bg-[--background-color-content-admin]">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminLayout;
