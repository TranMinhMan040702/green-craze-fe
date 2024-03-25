import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatBody from './ChatBody';
import { useState } from 'react';

function Chat({ setShowChat }) {
    const [isNewChat, setIsNewChat] = useState(false);

    return (
        <div className="chat-container flex flex-col fixed w-[40rem] h-[60rem] right-[8rem] bottom-[0rem] border">
            <ChatHeader setShowChat={setShowChat} />
            <ChatBody setIsNewChat={setIsNewChat} isNewChat={isNewChat} />
            {!isNewChat && <ChatFooter />}
        </div>
    );
}

export default Chat;
