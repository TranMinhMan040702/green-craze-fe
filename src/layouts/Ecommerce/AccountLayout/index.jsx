function AccountLayout({ children }) {
    return (
        <div className="account-layout-container m-36">
            <div className="w-[1140px] flex h-[673px] rounded-[5px]">
                <div>
                    <div className="flex border-b-2">
                        <img className="rounded-full bg-gray-500"/>
                        <div>
                            <h1>Nguyễn Minh Sơn</h1>
                            <button>Sửa hồ sơ</button>
                        </div>
                    </div>

                </div>
                <div className="flex-grow">{children}</div>
            </div>
        </div>
    );
}

export default AccountLayout;
