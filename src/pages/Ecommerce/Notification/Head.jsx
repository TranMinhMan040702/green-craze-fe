import { Button, notification } from "antd";
import { useUpdateAllNotification } from "../../../hooks/api";
import { useState } from "react";

function Head({refetchNotify}) {
    const [processing, setProcessing] = useState(false);
    const mutateReadAll = useUpdateAllNotification({
        success: (data) => {
            notification.success({
                message: 'Thành công',
                description: 'Đánh dấu đã đọc tất cả thông báo thành công',
            });
            refetchNotify();
        },
        error: (err) => {
            notification.error({
                message: 'Có lỗi xảy ra',
                description: 'Thao tác thất bại',
            });
        },
        mutate: () => {
            setProcessing(true);
        },
        settled: () => {
            setProcessing(false);
        },
    });

    const onReadAll = async () => {
        await mutateReadAll.mutateAsync({

        });
    }

    return (
        <div className="border-b-[0.1rem] py-[2.5rem] pl-[1.9rem] pr-[2.1rem] flex justify-between items-center">
            <h1 className="capitalize m-0 py-[0.7rem]">Thông báo của tôi</h1>
            <Button onClick={onReadAll} loading={processing} className="text-[1.4rem] text-black cursor-pointer">
                Đánh dấu Đã đọc tất cả
            </Button>
        </div>
    );
}

export default Head;
