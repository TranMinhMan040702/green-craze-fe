import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatBody from './ChatBody';
import { useEffect, useState } from 'react';
import { useGetMe } from '../../../../hooks/api';
import { getUserId } from '../../../../utils/storage';

function Chat({ setShowChat, data, isLoading, onUpdateMessageStatus }) {
    let userId = getUserId();
    let currentUser = useGetMe();
    const [roomId, setRoomId] = useState(-1);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (isLoading || currentUser.isLoading || !currentUser.data) return;

        setRoomId(data?.data?.id);
        setMessages(
            data?.data?.messages?.map((m) => {
                return {
                    messageId: m.id,
                    text: m.content,
                    status: m.status,
                    image: m.image,
                    isMe: m.userId == userId,
                };
            }),
        );
    }, [data, isLoading]);
    return (
        <div className="chat-container flex flex-col fixed w-[40rem] h-[45rem] right-[8rem] bottom-[0rem] border">
            <ChatHeader setShowChat={setShowChat} />
            <ChatBody messages={messages} />
            <ChatFooter
                onUpdateMessageStatus={onUpdateMessageStatus}
                roomId={roomId}
                setMessages={setMessages}
                messages={messages}
            />
        </div>
    );
}

export default Chat;
