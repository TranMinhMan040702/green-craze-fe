import { useDeleteListUser } from '../../../hooks/api/useUserApi';
import Head from '../../../layouts/Admin/components/Head';

function AccountHead({ params, accountIds }) {
    const mutationDelete = useDeleteListUser({
        success: () => {},
        error: (err) => {
            console.log(err);
        },
        obj: {
            ids: accountIds,
            params: params,
        },
    });
    const onDisableAll = async () => {
        await mutationDelete.mutateAsync(accountIds);
    };
    return <Head title={'Quản lý tài khoản'} isAdd={false} handleDisableAll={onDisableAll} />;
}

export default AccountHead;
