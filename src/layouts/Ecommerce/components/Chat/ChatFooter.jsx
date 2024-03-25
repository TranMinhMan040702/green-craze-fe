import { FileImageOutlined, SendOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { useState } from 'react';

function ChatFooter() {
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const onCloseImage = () => {
        setImageFile(null);
        setImage(null);
    };

    return (
        <div>
            {image && (
                <div className="relative flex bg-gray-100 border-t">
                    <button
                        onClick={onCloseImage}
                        type="button"
                        class="bg-[--primary-color]  h-fit mr-2 rounded-md p-2 inline-flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-inset "
                    >
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
            <div className="relative py-[2rem] z-2000 bg-[#ffffff] h-[5rem] flex items-center">
                <input
                    type="text"
                    placeholder="Nhập nội dung tin nhắn . . ."
                    className="w-full pl-[2rem] outline-none ring-0 border-none text-[1.6rem]"
                />

                <input
                    type="file"
                    accept="image/*"
                    className="image-file-input"
                    hidden
                    onChange={({ target: { files } }) => {
                        files[0] && setImageFile(files[0]);
                        if (files && files[0]) {
                            setImage(URL.createObjectURL(files[0]));
                        }
                    }}
                />
                <div className="absolute right-5 top-[50%] -translate-y-[50%] flex gap-[1rem] items-center text-[2rem]">
                    <FileImageOutlined
                        className="cursor-pointer"
                        onClick={() => document.querySelector('.image-file-input').click()}
                    />
                    <SendOutlined className="text-[--primary-color] cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default ChatFooter;
