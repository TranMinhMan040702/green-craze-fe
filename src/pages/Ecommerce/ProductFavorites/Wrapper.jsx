import Item from './Item';
import { useGetFollowProduct } from '../../../hooks/api';

function Wrapper() {
    const dataApi = useGetFollowProduct();
    return (
        <div>
            {dataApi?.data?.data?.items?.map((item, index) => {
                return (
                    <Item
                        dataApi={dataApi}
                        key={index}
                        item={item}
                        isLastItem={index === dataApi?.data?.data?.items?.length - 1}
                    />
                );
            })}
        </div>
    );
}

export default Wrapper;
