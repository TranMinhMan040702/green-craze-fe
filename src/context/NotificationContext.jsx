import { createContext, useEffect, useState } from 'react';
import { useGetListNotification, useGetMe } from '../hooks/api';
import { notification } from 'antd';
import connection from '../utils/websocket';
import { getUserId } from '../utils/storage';

export const NotificationContext = createContext();
var stompClient = null;
function NotificationContextProvider({ children }) {
    var userId = getUserId();
    const [countNotify, setCountNotify] = useState(0);

    const { isLoading, data, refetch } = useGetListNotification({
        size: 99,
        columnName: 'createdAt',
        isSortAscending: false,
    });

    useEffect(() => {
        if (userId && !stompClient) {
            stompClient = connection(userId, onNotificationReceived);
        }
    }, [userId]);

    useEffect(() => {
        if (data) {
            setCountNotify(data?.data?.items?.filter((item) => !item.status)?.length || 0);
        }
    }, [data, isLoading]);

    const onNotificationReceived = (payload) => {
        var payloadData = JSON.parse(payload.body);
        refetch();
        notification.success({
            message: payloadData.title,
            description: payloadData.content,
        });
        setCountNotify(payloadData.count);
    };

    return (
        <NotificationContext.Provider
            value={{
                countNotify,
                notifications: data?.data?.items || [],
                refetchNotification: refetch,
                setCountNotify: setCountNotify,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
}

export default NotificationContextProvider;
