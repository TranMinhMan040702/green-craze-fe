import { over } from 'stompjs';
import SockJS from 'sockjs-client/dist/sockjs';

const url = import.meta.env.VITE_API_URL + '/core/infrastructure/sockjs';
var stompClient = null;

const onConnected = (stompClient, userId, onNotificationReceived) => {
    stompClient.subscribe('/notifications', onNotificationReceived);
    stompClient.subscribe('/user/' + userId + '/notifications', onNotificationReceived);
    console.log('Connected to WebSocket');
};

const onError = (err) => {
    console.log(err);
};

const connection = async (userId, onNotificationReceived) => {
    const socket = new SockJS(url);
    stompClient = over(socket);
    await stompClient.connect(
        {},
        () => onConnected(stompClient, userId, onNotificationReceived),
        onError,
    );
    return stompClient;
};

export default connection;
