import { FileImageOutlined, SendOutlined } from '@ant-design/icons';
import { Image } from 'antd';

function ChatForm({ text, onChange, onSend, setImageFile, image, setImage }) {
    const onCloseImage = () => {
        setImageFile(null);
        setImage(null);
    };

    return (
        <div className=" border-gray-200 p-4 mb-2 sm:mb-0">
            {image && (
                <div className="relative flex">
                    <button
                        onClick={onCloseImage}
                        type="button"
                        class="bg-white h-fit mr-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                        <span class="sr-only">Close menu</span>
                        <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <Image src={image} width={100} className="mb-3 h-30" />
                </div>
            )}
            <div className="relative flex">
                <input
                    type="text"
                    placeholder="Nhập tin nhắn..."
                    value={text}
                    onChange={onChange}
                    className="w-full text-2xl py-[1rem] bg-slate-100 outline-none border-none focus:outline-none pl-12 rounded-3xl"
                />
                <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            className="image-file-input"
                            hidden
                            onChange={({ target: { files } }) => {
                                files[0] && setImageFile(files[0]);
                                if (files) {
                                    setImage(URL.createObjectURL(files[0]));
                                }
                            }}
                        />
                    </div>
                    <div className="absolute right-5 top-[50%] -translate-y-[50%] flex gap-[1rem] items-center text-[2rem]">
                        <FileImageOutlined
                            onClick={() => document.querySelector('.image-file-input').click()}
                            className="cursor-pointer"
                        />
                        <SendOutlined className="text-[--primary-color] cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChatForm;
