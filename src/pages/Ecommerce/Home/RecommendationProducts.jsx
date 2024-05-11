import CardProduct from '../../../layouts/Ecommerce/components/CardProduct';
import { useGetListRecommendationByUser } from '../../../hooks/api';
import { useEffect, useState } from 'react';
import WebLoading from '../../../layouts/Ecommerce/components/WebLoading';

function RecommendationProducts() {
    const { isLoading, data } = useGetListRecommendationByUser();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (isLoading || !data) return;
        setProducts(data?.data?.items);
    }, [isLoading, data]);

    if (isLoading) return <WebLoading />;

    return (
        <div className="recommendation-products my-[3rem]">
            <p className='text-center text-[3rem] font-bold'>Sản phẩm gợi ý</p>
            <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-[2rem]">
                {products.length > 0 &&
                    products.map((item, index) => <CardProduct key={index} product={item} />)}
            </div>
        </div>
    );
}

export default RecommendationProducts;
