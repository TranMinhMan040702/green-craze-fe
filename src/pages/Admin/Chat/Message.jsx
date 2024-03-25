import { Image } from 'antd';

function Message({ message }) {
    return (
        <div class="chat-message">
            <div class={`flex items-end ${message.isMe && 'justify-end'}`}>
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div>
                        {message.image && !message.text ? (
                            <span
                                class={`px-[1rem] py-[1.2rem] rounded-lg inline-block  ${
                                    message.isMe
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-gray-200 text-gray-600 rounded-bl-none'
                                } `}
                            >
                                <Image src={message.image} className="h-30" />
                            </span>
                        ) : message.text && !message.image ? (
                            <span
                                class={`px-[1rem] py-[1.2rem] text-[1.4rem] rounded-lg inline-block  ${
                                    message.isMe
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-gray-200 text-gray-600 rounded-bl-none'
                                } `}
                            >
                                {message.text}
                            </span>
                        ) : (
                            <div
                                class={`px-[1rem] py-[1.2rem] flex flex-col gap-[1rem] rounded-lg text-left ${
                                    message.isMe
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-gray-200 text-gray-600 rounded-bl-none'
                                } `}
                            >
                                <Image src={message.image} className="h-30" />
                                <p className='text-[1.4rem]'>{message.text}</p>
                            </div>
                        )}
                    </div>
                </div>
                <img
                    src={message.userAvatar}
                    alt="My profile"
                    class={`w-6 h-6 rounded-full ${message.isMe ? 'order-2' : 'order-1'}`}
                />
            </div>
        </div>
    );
}

export default Message;
