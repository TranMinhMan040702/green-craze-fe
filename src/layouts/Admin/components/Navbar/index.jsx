import './navbar.scss';
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
    getItem('Trang chủ', 'home', <IconHome2 />),
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
        getItem('Danh mục sản phẩm', 'category'),
        getItem('Thương hiệu', 'brand'),
        getItem('Đơn vị tính', 'unit'),
    ]),
    getItem('Kho hàng', 'inventory', <IconBuildingStore />),
    getItem('Đơn hàng', 'order', <IconClipboardText />, [
        getItem('Đơn mua hàng', 'list-order'),
        getItem('Lý do hủy đơn hàng', 'reason'),
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
    const [openKeys, setOpenKeys] = useState(['home']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <div className="navbar-container">
            <Menu
                mode="inline"
                defaultSelectedKeys={['home']}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                items={items}
            />
        </div>
    );
}

export default Navbar;
