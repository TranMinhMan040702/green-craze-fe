import { useEffect, useRef, useState } from 'react';
import ChatForm from './ChatForm';
import Message from './Message';

function ChatDetail({ chat }) {
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([
        {
            messageId: 1,
            isMe: true,
            text: 'Hello there!',
            image: null,
            userAvatar: 'https://picsum.photos/536/354',
        },
        {
            messageId: 2,
            isMe: false,
            text: 'Hello!',
            image: 'https://picsum.photos/536/354',
            userAvatar: 'https://picsum.photos/536/354',
        },
    ]);
    const [text, setText] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [image, setImage] = useState(null);
    const divRef = useRef(null);

    useEffect(() => {
        if (divRef.current) divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSend = async () => {
        let file = null;
        file = imageFile;
        if ((text == null || text == '') && file == null) return;
        setImage(null);
        setImageFile(null);
        setText('');
    };
    return (
        <div>
            <div class="flex flex-col h-[62.5rem]">
                <div class="flex sm:items-center justify-between px-[1rem] py-[1.6rem] border-b border-gray-200">
                    <div class="relative flex items-center space-x-4">
                        <div class="relative">
                            <img src={chat?.avatar} alt="" class="w-16 h-16 rounded-full" />
                        </div>
                        <div class="flex flex-col leading-tight">
                            <div class="text-2xl mt-1 flex items-center">
                                <span class="text-gray-700 mr-3 font-bold">{chat?.name}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button
                            type="button"
                            class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                class="h-6 w-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {loading ? (
                    <div class="flex justify-center space-x-2 animate-pulse">
                        <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                    </div>
                ) : (
                    <div className="h-full">
                        <div
                            class="h-full flex flex-col justify-end space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                        >
                            {messages.map((m) => {
                                return <Message message={m} key={m.messageId} />;
                            })}
                            {/* <div ref={divRef} /> */}
                        </div>
                    </div>
                )}
            </div>
            <ChatForm
                image={image}
                setImage={setImage}
                setImageFile={setImageFile}
                text={text}
                onChange={onChange}
                onSend={onSend}
            />
        </div>
    );
}

export default ChatDetail;
