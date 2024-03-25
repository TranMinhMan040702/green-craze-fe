import { Button } from 'antd';

function ChatBody({ setIsNewChat, isNewChat }) {
    return (
        <div className="overflow-y-scroll">
            <div className="bg-[#f3f3f3] min-h-[50rem] grow flex flex-col justify-end gap-[1.5rem] py-[1rem] px-[1.3rem]">
                {!isNewChat ? (
                    <>
                        <div className="bg-white border border-black p-4 w-[90%] rounded-xl flex flex-col">
                            <div className=" text-[1.4rem]">Hello bạn nha</div>
                            <div className="self-end text-[1.2rem]">21:50</div>
                        </div>
                        <div className="bg-[--primary-color] p-4 text-white w-[90%] self-end rounded-xl flex flex-col">
                            <div className=" text-[1.4rem]">Hello chào shop cc</div>
                            <div className="self-end text-[1.2rem]">21:50</div>
                        </div>
                    </>
                ) : (
                    <div className="self-center">
                        <Button className="bg-[--primary-color] text-white border-[--primary-color]">
                            Bắt đầu chat
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChatBody;
