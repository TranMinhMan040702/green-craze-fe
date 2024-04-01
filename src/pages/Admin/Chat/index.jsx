import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import UserChat from './UserChat';
import ChatDetail from './ChatDetail';
import SearchBar from './SearchBar';
import { useGetAllRoom, useUpdateMessageStatus } from '../../../hooks/api';

function ChatPage() {
    const [chosenChat, setChosenChat] = useState(-1);
    const [chats, setChats] = useState([]);

    const { data, isLoading, refetch: refetchAllRoom } = useGetAllRoom();

    useEffect(() => {
        if (isLoading || !data) return;

        setChats(
            data?.data?.map((c) => {
                return {
                    chatId: c.id,
                    avatar: 'https://picsum.photos/536/354',
                    name: c.name,
                    lastMessage: c.message?.content || (c.message?.image && 'Đã gửi một ảnh'),
                    userId: c.userId,
                    isUnread: !c.message?.status && c.message?.userId !== 'ADMIN',
                };
            }),
        );
    }, [data, isLoading]);

    const onChatClick = (user) => {};

    return (
        <div className="chat-container">
            <Row>
                <Col span={6} className="border">
                    <h1 className="mb-0 pl-[1.5rem] font-bold">Chats</h1>
                    <div className=" min-h-[62rem]">
                        <SearchBar onChatClick={onChatClick} />
                        {chats.map((c) => {
                            return (
                                <UserChat
                                    key={c.chatId}
                                    chat={c}
                                    setChosenChat={setChosenChat}
                                    refetchAllRoom={refetchAllRoom}
                                />
                            );
                        })}
                    </div>
                </Col>
                {chosenChat != -1 ? (
                    <Col span={18} className="border">
                        <ChatDetail
                            chat={chats.find((c) => c.chatId === chosenChat)}
                            refetchAllRoom={refetchAllRoom}
                        />
                    </Col>
                ) : null}
            </Row>
        </div>
    );
}

export default ChatPage;
