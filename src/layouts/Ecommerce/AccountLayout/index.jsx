import './accountlayout.scss';
import SideBar from './SideBar';

function AccountLayout({ children, routeKey }) {
    return (
        <div className="account-layout-container xl:p-36 sm:p-10">
            <div className="flex max-md:flex-col rounded-[0.5rem]">
                <SideBar routeKey={routeKey} />
                <div className="container min-h-[60rem] max-md:my-7 md:ml-[5.5rem] bg-white border rounded-[0.3rem] shadow">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AccountLayout;
