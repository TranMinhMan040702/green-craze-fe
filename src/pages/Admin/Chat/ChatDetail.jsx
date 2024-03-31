import { useEffect, useRef, useState } from 'react';
import ChatForm from './ChatForm';
import Message from './Message';
import { useGetAllMessagesByRoomId, useSendMessageWithImage } from '../../../hooks/api';
import { useStompClient, useSubscription } from 'react-stomp-hooks';
import { getUserId } from '../../../utils/storage';

function ChatDetail({ chat }) {
    const stompClient = useStompClient();
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [image, setImage] = useState(null);

    const divRef = useRef(null);

    const { data, isLoading } = useGetAllMessagesByRoomId(chat.chatId);

    const mutationCreateMessageWithImage = useSendMessageWithImage({
        success: () => {},
        error: (err) => {
            console.log(err.message);
        },
    });

    useEffect(() => {
        if (divRef.current) divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    useEffect(() => {
        if (isLoading || !data) return;
        setMessages(
            data?.data?.map((m) => {
                return {
                    messageId: m.id,
                    text: m.content,
                    status: m.status,
                    image: m.image,
                    isMe: m.userId == 'ADMIN',
                };
            }),
        );
    }, [data, isLoading]);

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSendMessage = async () => {
        if (!text && !imageFile) return;

        if (imageFile) {
            const formData = new FormData();
            formData.append('destination', chat.userId);
            formData.append('userId', 'ADMIN');
            formData.append('roomId', chat.chatId);
            formData.append('image', imageFile);
            formData.append('status', false);
            formData.append('content', text);
            await mutationCreateMessageWithImage.mutateAsync(formData);

            setText('');
            setImage(null);
            setImageFile(null);
            return;
        }

        if (stompClient) {
            stompClient.publish({
                destination: `/app/send/message`,
                body: JSON.stringify({
                    destination: chat.userId,
                    userId: 'ADMIN',
                    roomId: chat.chatId,
                    image: null,
                    status: false,
                    content: text,
                }),
            });
            setText('');
            setImage(null);
            setImageFile(null);
        }
    };

    useSubscription(`/chat/receive/${chat.userId}`, (content) => {
        let message = JSON.parse(content.body);
        let currentMessages = [
            ...messages,
            {
                messageId: message.id,
                text: message.content,
                status: message.status,
                image: message.image,
                isMe: message.userId == 'ADMIN',
            },
        ];
        setMessages(currentMessages);
    });

    return (
        <div className="">
            <div class="flex flex-col h-[62.5rem]">
                <div class="flex sm:items-center justify-between px-[1rem] py-[1.6rem] border-b border-gray-200">
                    <div class="relative flex items-center space-x-4">
                        <div class="flex flex-col leading-tight">
                            <div class="text-2xl mt-1 ml-3 flex items-center">
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
                {isLoading ? (
                    <div class="flex justify-center space-x-2 animate-pulse">
                        <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                    </div>
                ) : (
                    <div className="h-full overflow-y-scroll">
                        <div class="flex flex-col justify-end space-y-4 p-3 min-h-[50rem] scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                            {messages.map((m) => {
                                return <Message message={m} key={m.messageId} />;
                            })}
                            <div ref={divRef} />
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
                onSend={onSendMessage}
            />
        </div>
    );
}

export default ChatDetail;
