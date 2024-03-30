import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatBody from './ChatBody';
import { useEffect, useState } from 'react';
import { useCreateRoomChat, useGetMe, useGetMessagesByUserId } from '../../../../hooks/api';
import { getUserId } from '../../../../utils/storage';

function Chat({ setShowChat }) {
    let userId = getUserId();
    let currentUser = useGetMe();
    const [roomId, setRoomId] = useState(-1);
    const [processing, setProcessing] = useState(false);
    const { data, isLoading } = useGetMessagesByUserId();
    const mutateCreateRoom = useCreateRoomChat({
        success: () => {},
        error: (err) => {},
        mutate: () => {
            setProcessing(true);
        },
        settled: () => {
            setProcessing(false);
        },
    });

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (isLoading || currentUser.isLoading || !currentUser.data) return;

        // const createRoomAsync = async () => {
        //     await mutateCreateRoom.mutateAsync({
        //         userId: userId,
        //         name: `${currentUser?.data?.data?.firstName} ${currentUser?.data?.data?.lastName}`,
        //     });
        // };

        // if (!data) {
        //     createRoomAsync();
        //     return;
        // }
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
        <div className="chat-container flex flex-col fixed w-[40rem] h-[50rem] right-[8rem] bottom-[0rem] border">
            <ChatHeader setShowChat={setShowChat} />
            <ChatBody messages={messages} />
            <ChatFooter roomId={roomId} setMessages={setMessages} />
        </div>
    );
}

export default Chat;
