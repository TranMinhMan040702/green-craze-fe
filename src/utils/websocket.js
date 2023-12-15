import { over } from 'stompjs';
import SockJS from 'sockjs-client/dist/sockjs';

const url = import.meta.env.VITE_API_URL + '/core/infrastructure/sockjs';
var stompClient = null;

const connection = async (userId, onNotificationReceived) => {
    const socket = new SockJS(url);
    stompClient = over(socket);
    await stompClient.connect(
        {},
        () => onConnected(stompClient, userId, onNotificationReceived),
        (err) => onError(err, userId, onNotificationReceived),
    );
    return stompClient;
};

const onConnected = (stompClient, userId, onNotificationReceived) => {
    stompClient.subscribe('/user/' + userId + '/notifications', onNotificationReceived);
    console.log('Connected to WebSocket');
};

const onError = (err, userId, onNotificationReceived) => {
    setTimeout(() => {
        connection(userId, onNotificationReceived);
    }, 5000);
    console.log(err);
};

export default connection;
