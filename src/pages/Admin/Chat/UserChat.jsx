import { Typography } from 'antd';
import { useSubscription } from 'react-stomp-hooks';
const { Paragraph } = Typography;

function UserChat({ setChosenChat, chat, refetchAllRoom }) {
    const onChoosen = () => {
        setChosenChat(chat?.chatId);
    };
    useSubscription(`/chat/receive/${chat.userId}`, (content) => {
        refetchAllRoom();
    });

    return (
        <div
            onClick={onChoosen}
            style={{
                backgroundColor: chat?.isUnread ? '#d6d6d6' : 'white',
            }}
            class="flex flex-row py-[1.6rem] px-[1.6rem] justify-center items-center hover:bg-slate-200 hover:cursor-pointer transition-all "
        >
            <div
                class="w-full text-left"
                style={{
                    fontWeight: chat?.isUnread ? 'bold' : 'normal',
                }}
            >
                <div class="text-2xl mb-2 font-semibold">{chat?.name}</div>
                <Paragraph
                    ellipsis={{
                        rows: 1,
                    }}
                >
                    {chat?.lastMessage}
                </Paragraph>
            </div>
            {chat?.isUnread ? (
                <div className="bg-black p-0 w-[1.3rem] h-[1rem] rounded-full"></div>
            ) : null}
        </div>
    );
}

export default UserChat;
