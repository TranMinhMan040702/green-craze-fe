import { useEffect, useState } from "react";
import { useGetMessagesByUserId } from "../../../hooks/api";
import { getUserId } from "../../../utils/storage";
import Chat from "../components/Chat";
import { useSubscription } from "react-stomp-hooks";
import { Badge } from "antd";
import { WechatOutlined } from "@ant-design/icons";

function ChatBox({ showChat, setShowChat }) {
    const userId = getUserId();
    const [isNewMessage, setIsNewMessage] = useState(false);

    const { data, isLoading, refetch: refetchAllMessageByUserId } = useGetMessagesByUserId();

    useEffect(() => {
        if (isLoading || !data) return;
        setIsNewMessage(data?.data?.messages.some((m) => !m.status && m.userId != userId));
    }, [data, isLoading]);

    useSubscription(`/chat/receive/${userId}`, (content) => {
        refetchAllMessageByUserId();
    });

    return (
        <>
            {!showChat ? (
                <div
                    onClick={() => setShowChat(true)}
                    style={{
                        backgroundColor: isNewMessage ? 'var(--primary-color)' : '#fff',
                        color: isNewMessage ? 'white' : 'var(--primary-color)',
                    }}
                    className="fixed bottom-0 right-[7rem] border rounded-tl-lg rounded-tr-lg shadow-xl"
                >
                    <Badge dot={isNewMessage} size="large" className="chat-bagde-client">
                        <div
                            style={{
                                color: isNewMessage ? 'white' : 'var(--primary-color)',
                            }}
                            className="px-[2rem]  cursor-pointer py-[0.6rem] flex gap-[1rem] items-center"
                        >
                            <WechatOutlined className="text-[3rem]" />
                            <p className="text-[2rem]">Chat</p>
                        </div>
                    </Badge>
                </div>
            ) : (
                <div className="relative">
                    <Chat setShowChat={setShowChat} data={data} isLoading={isLoading} />
                </div>
            )}
        </>
    );
}

export default ChatBox;
