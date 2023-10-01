import './productDetail.scss';
import Information from './Information';
import Description from './Description';
import Review from './Review';

function ProductDetailPage() {
    return (
        <div className="product-detail-container p-[2rem]">
            <div className="max-w-[1200px] h-full mx-auto p-[1.2rem] rounded-[10px] bg-white">
                <Information />
                <Description />
                <Review />
            </div>
        </div>
    );
}

export default ProductDetailPage;
