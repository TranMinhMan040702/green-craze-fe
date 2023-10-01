import './recommentProduct.scss';
import { Button } from 'antd';
import CardProductRecomment from '../../components/CardProductRecomment';

function RecommentProduct() {
    return (
        <div className="recomment">
            <Button className="w-full h-[38px] text-white font-medium text-[1.6rem] text-star mb-[1.2rem] hover:border-none border-none">
                Có thể bạn sẽ thích
            </Button>
            <div className="card-list">
                <CardProductRecomment />
                <CardProductRecomment />
                <CardProductRecomment />
            </div>
        </div>
    );
}

export default RecommentProduct;
