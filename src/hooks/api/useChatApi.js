import apiRoutes from '../../config/apiRoutes';
import { useFetch, usePost, usePostForm, usePut } from '../../utils/reactQuery';
import { getUserId } from '../../utils/storage';

export const useSendMessageWithImage = (updater) => {
    return usePostForm(apiRoutes.common.chat + '/send/message', updater);
};

export const useCreateRoomChat = (updater) => {
    return usePost(apiRoutes.common.chat + '/rooms', updater);
};

export const useUpdateMessageStatus = (updater) => {
    return usePut(apiRoutes.common.chat + '/messages', updater);
};

export const useGetMessagesByUserId = () => {
    let userId = getUserId();
    return useFetch({
        url: `${apiRoutes.common.chat}/rooms/${userId}`,
        key: 'getListMessageByUserId',
    });
};

export const useGetAllMessagesByRoomId = (roomId) => {
    return useFetch({
        url: `${apiRoutes.common.chat}/messages/${roomId}`,
        key: 'getAllMessageByRoomId',
    });
};

export const useGetAllRoom = () => {
    return useFetch({
        url: `${apiRoutes.common.chat}/rooms`,
    });
};
