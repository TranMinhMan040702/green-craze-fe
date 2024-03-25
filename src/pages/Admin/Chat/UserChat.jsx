function UserChat({ setChosenChat, chat }) {
    const onChoosen = () => {
        setChosenChat(chat?.chatId);
    };
    return (
        <div
            onClick={onChoosen}
            class="flex flex-row py-[1.6rem] px-2 justify-center items-center hover:bg-slate-200 hover:cursor-pointer transition-all "
        >
            <div class="w-1/4">
                <img src={chat?.avatar} class="object-cover h-20 w-20 rounded-full" alt="" />
            </div>
            <div class="w-full text-left">
                <div class="text-2xl mb-2 font-semibold">{chat?.name}</div>
                <span class="text-gray-500">{chat?.lastMessage}</span>
            </div>
        </div>
    );
}

export default UserChat;
