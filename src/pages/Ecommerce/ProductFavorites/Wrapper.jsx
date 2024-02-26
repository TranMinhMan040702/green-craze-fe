import images from '../../../assets/images';
import Item from './Item';
import { useGetFollowProduct } from '../../../hooks/api';
import WebLoading from '../../../layouts/Ecommerce/components/WebLoading';

function Wrapper() {
    const dataApi = useGetFollowProduct();

    if (dataApi?.isLoading) return <WebLoading />;

    return (
        <div>
            {dataApi?.data?.data?.items?.length === 0 ? (
                <div className="text-center h-[350px] shadow-[0_1px_2px_0_rgba(0,0,0,0.13)]">
                    <div className="flex justify-center">
                        <img className="w-48 h-48 block mt-40" src={images.order_empty} />
                    </div>
                    <p className="text-[1.6rem]">Chưa có sản phẩm yêu thích</p>
                </div>
            ) : (
                dataApi?.data?.data?.items?.map((item, index) => {
                    return (
                        <Item
                            dataApi={dataApi}
                            key={index}
                            item={item}
                            isLastItem={index === dataApi?.data?.data?.items?.length - 1}
                        />
                    );
                })
            )}
        </div>
    );
}

export default Wrapper;
