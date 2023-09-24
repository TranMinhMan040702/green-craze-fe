import { Button, Upload } from 'antd';
import { useRef, useState } from 'react';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
function UploadAvatar() {
    const [imageUrl, setImageUrl] = useState();
    const inputRef = useRef(null);
    const handleChange = (info) => {
        if (info.file) {
            getBase64(info.file, (url) => {
                setImageUrl(url);
            });
        }
    };
    return (
        <div className="flex flex-col item-center text-center xl:border-l-[0.1rem] xl:ml-[6rem]">
            <Upload
                name="avatar"
                listType="picture-circle"
                className="avatar-uploader flex justify-center "
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleChange}
            >
                {imageUrl ? (
                    <img src={imageUrl} alt="avatar" className="w-full rounded-full" />
                ) : (
                    <div ref={inputRef}>
                        <PlusOutlined />
                        <div
                            className='mt-[0.8rem]'
                        >
                            Tải ảnh lên
                        </div>
                    </div>
                )}
            </Upload>
            <Button
                className="h-[4.5rem] w-[20rem] mx-auto mt-5"
                onClick={() => inputRef?.current?.click()}
                icon={<UploadOutlined />}
            >
                Chọn ảnh
            </Button>
        </div>
    );
}

export default UploadAvatar;
