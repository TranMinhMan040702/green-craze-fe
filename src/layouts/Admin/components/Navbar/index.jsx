import './navbar.scss';
import config from '../../../../config';
import React, { useState } from 'react';
import {
    IconHome2,
    IconAddressBook,
    IconFingerprint,
    IconUsers,
    IconBuilding,
    IconPackage,
    IconBuildingStore,
    IconClipboardText,
    IconTruckDelivery,
    IconMessage,
    IconCertificate,
    IconTransfer,
} from '@tabler/icons-react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Trang chủ', config.routes.admin.dashboard, <IconHome2 />),
    getItem('Địa chỉ', 'address', <IconAddressBook />, [
        getItem('Điểm nhận hàng', 'delivery-point'),
        getItem('Tỉnh thành', 'province'),
        getItem('Quận huyện', 'district'),
        getItem('Phường xã', 'ward'),
    ]),
    getItem('Người dùng', 'user', <IconFingerprint />, [
        getItem('Tài khoản', 'account'),
        getItem('Quyền', 'role'),
    ]),
    getItem('Nhân viên', 'employee', <IconBuilding />),
    getItem('Khách hàng', 'customer', <IconUsers />),
    getItem('Sản phẩm', 'product', <IconPackage />, [
        getItem('Danh sách sản phẩm', config.routes.admin.product),
        getItem('Danh mục sản phẩm', config.routes.admin.category),
        getItem('Thương hiệu', config.routes.admin.brand),
        getItem('Đơn vị tính', config.routes.admin.unit),
    ]),
    getItem('Kho hàng', config.routes.admin.inventory, <IconBuildingStore />),
    getItem('Đơn hàng', 'order', <IconClipboardText />, [
        getItem('Đơn mua hàng', config.routes.admin.order),
        getItem('Lý do hủy đơn hàng', config.routes.admin.reason_cancel),
    ]),
    getItem('Vận chuyển', 'delivery', <IconTruckDelivery />),
    getItem('Đánh giá', 'review', <IconMessage />),
    getItem('Khuyến mãi', 'sale', <IconCertificate />),
    getItem('Giao dịch', 'transaction', <IconTransfer />),
];

const rootSubmenuKeys = [
    'home',
    'address',
    'user',
    'employee',
    'customer',
    'product',
    'inventory',
    'order',
    'delivery',
    'review',
    'sale',
    'transaction',
];
function Navbar() {
    const navigate = useNavigate();
    let routeKey = useLocation().pathname;

    const [openKeys, setOpenKeys] = useState(['home']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const onClick = (e) => {
        navigate(e.key);
    };

    return (
        <div className="navbar-container w-[225px]">
            <Menu
                mode="inline"
                onClick={onClick}
                defaultSelectedKeys={[routeKey]}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                items={items}
            />
        </div>
    );
}

export default Navbar;
