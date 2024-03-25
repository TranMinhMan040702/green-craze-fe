import { Col, Row } from 'antd';
import { useState } from 'react';
import UserChat from './UserChat';
import ChatDetail from './ChatDetail';
import SearchBar from './SearchBar';

function ChatPage({ chat }) {
    const [chosenChat, setChosenChat] = useState(-1);
    const [chats, setChats] = useState([
        {
            chatId: 1,
            avatar: 'https://picsum.photos/536/354',
            name: 'John Doe',
            lastMessage: 'Hello there!',
        },
    ]);

    const onChatClick = (user) => {};

    return (
        <div className="chat-container">
            <Row>
                <Col span={6} className="border">
                    <h1 className="mb-0 pl-[1.5rem] font-bold">Chats</h1>
                    <div className=' min-h-[62rem]'>
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
