import './productDetail.scss';
import Information from './Information';
import Description from './Description';
import Review from './Review';
import { useParams } from 'react-router-dom';
import { useGetProductBySlug } from '../../../hooks/api';
import { Spin } from 'antd';

function ProductDetailPage() {
    let { slug } = useParams();
    const { data, isLoading } = useGetProductBySlug(slug);
    return (
        <div className="product-detail-container p-[2rem]">
            <div className="max-w-[1200px] h-full mx-auto p-[1.2rem] rounded-[10px] bg-white">
                {!isLoading ? (
                    data?.data ? (
                        <>
                            <Information product={data?.data} />
                            <Description product={data?.data} />
                            <Review />
                        </>
                    ) : (
                        <div className="text-center text-[2rem]">Không tìm thấy sản phẩm</div>
                    )
                ) : (
                    <div className="flex justify-center">
                        <Spin />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductDetailPage;
