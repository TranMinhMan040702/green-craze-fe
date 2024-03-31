import { useEffect, useRef } from 'react';
import Message from './Message';

function ChatBody({ messages }) {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    return (
        <div className="overflow-y-scroll">
            <div className="bg-[#f3f3f3] min-h-[40rem] grow flex flex-col justify-end gap-[1.5rem] py-[1rem] px-[1.3rem]">
                {messages?.map((message) => {
                    return <Message message={message} key={message.id} />;
                })}
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
}

export default ChatBody;
