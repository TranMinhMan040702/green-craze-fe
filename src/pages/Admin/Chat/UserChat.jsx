import { Typography } from 'antd';
import { useSubscription } from 'react-stomp-hooks';
import { useUpdateMessageStatus } from '../../../hooks/api';
const { Paragraph } = Typography;

function UserChat({ chat, refetchAllRoom, setChosenChat }) {
    const onChoosen = async () => {
        await mutateUpdateMessageStatus.mutateAsync({ id: chat?.chatId });
    };

    const mutateUpdateMessageStatus = useUpdateMessageStatus({
        success: () => {
            setChosenChat(chat?.chatId);
            refetchAllRoom();
        },
    });

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
                <div
                    style={{
                        fontWeight: chat?.isUnread ? 'bold' : 'normal',
                    }}
                    className="text-2xl mb-2"
                >
                    {chat?.name}
                </div>
                <Paragraph
                    ellipsis={{
                        rows: 1,
                    }}
                >
                    {chat?.lastMessage}
                </Paragraph>
            </div>
            {chat?.isUnread ? (
                <div className="bg-red-500 p-0 w-[1rem] h-[1rem] rounded-full"></div>
            ) : null}
        </div>
    );
}

export default UserChat;
