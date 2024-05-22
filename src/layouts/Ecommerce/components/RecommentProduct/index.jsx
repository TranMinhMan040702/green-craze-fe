import './recommentProduct.scss';
import { Button } from 'antd';
import CardProductRecomment from '../../components/CardProductRecomment';
import { useGetListRecommendationByProduct } from '../../../../hooks/api';
import { useEffect, useState } from 'react';

function RecommentProduct({ productId }) {
    const { data, isLoading } = useGetListRecommendationByProduct(productId);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (isLoading || !data) return;
        setProducts(data?.data);
    }, [isLoading, data]);

    return (
        <div className="recomment">
            <Button className="w-full h-[38px] text-white font-medium text-[1.6rem] text-star mb-[1.2rem] hover:border-none border-none">
                Có thể bạn sẽ thích
            </Button>
            <div className="card-list">
                {products.length > 0 &&
                    products.map((item, index) => (
                        <CardProductRecomment key={index} product={item} />
                    ))}
                {/* {data?.data?.items?.map((product) => {
                    return <CardProductRecomment key={product?.id} product={product} />;
                })} */}
            </div>
        </div>
    );
}

export default RecommentProduct;
