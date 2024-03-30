import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import UserChat from './UserChat';
import ChatDetail from './ChatDetail';
import SearchBar from './SearchBar';
import { useGetAllRoom } from '../../../hooks/api';

function ChatPage({ chat }) {
    const [chosenChat, setChosenChat] = useState(-1);
    const [chats, setChats] = useState([]);

    const { data, isLoading } = useGetAllRoom();

    useEffect(() => {
        if (isLoading || !data) return;

        setChats(
            data?.data?.map((c) => {
                return {
                    chatId: c.id,
                    avatar: 'https://picsum.photos/536/354',
                    name: c.name,
                    lastMessage: c.lastMessage,
                    userId: c.userId
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
                                <UserChat key={c.chatId} chat={c} setChosenChat={setChosenChat} />
                            );
                        })}
                    </div>
                </Col>
                {chosenChat != -1 ? (
                    <Col span={18} className="border">
                        <ChatDetail chat={chats.find((c) => c.chatId === chosenChat)} />
                    </Col>
                ) : null}
            </Row>
        </div>
    );
}

export default ChatPage;
