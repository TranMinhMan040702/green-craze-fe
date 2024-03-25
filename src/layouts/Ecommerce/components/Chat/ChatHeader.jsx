import { DownSquareOutlined, WechatOutlined } from '@ant-design/icons';

function ChatHeader({ setShowChat }) {
    return (
        <div className="flex justify-between items-center text-[1.8rem] text-[--primary-color] bg-[#ffffff] px-[2rem] py-[1rem] border border-b-[0.1rem]">
            <div className="flex items-center gap-[1rem]">
                <WechatOutlined className="text-[3rem]" />
                <div className="">Chat</div>
            </div>
            <DownSquareOutlined onClick={() => setShowChat(false)} />
        </div>
    );
}

export default ChatHeader;
