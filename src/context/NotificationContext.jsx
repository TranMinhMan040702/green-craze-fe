import { createContext, useEffect, useState } from 'react';
import { useGetListNotification, useGetMe } from '../hooks/api';
import { notification } from 'antd';
import connection from '../utils/websocket';

export const NotificationContext = createContext();
var stompClient = null;
function NotificationContextProvider({ children }) {
    const [countNotify, setCountNotify] = useState(0);

    const { data: me } = useGetMe();

    const { isLoading, data, refetch } = useGetListNotification({
        size: 5,
        columnName: 'createdAt',
        isSortAscending: false,
    });

    useEffect(() => {
        if (me && !stompClient) {
            stompClient = connection(me?.data?.id, onNotificationReceived);
        }
    }, [me]);

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
