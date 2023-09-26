import './accountlayout.scss';
import SideBar from './SideBar';

function AccountLayout({ children, routeKey, isSetMinHeight = true }) {
    return (
        <div className="account-layout-container xl:p-36 sm:p-10 overflow-auto">
            <div className="flex max-xl:flex-col rounded-[0.5rem]">
                <SideBar routeKey={routeKey} />
                <div className={`container ${isSetMinHeight && 'min-h-[60rem]'} max-md:my-7 xl:ml-[5.5rem] bg-white  rounded-[0.5rem] `}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AccountLayout;
