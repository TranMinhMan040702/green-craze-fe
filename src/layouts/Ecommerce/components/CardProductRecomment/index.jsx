import './cardProductRecomment.scss';
import images from '../../../../assets/images';
import Card from 'antd/es/card/Card';
import Meta from 'antd/es/card/Meta';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CardProductRecomment() {
    return (
        <Card
            className="flex items-center card-recomment mb-[1.5rem] cursor-pointer"
            cover={<img className="w-[90px] object-cover" src={images.product} />}
        >
            <Meta title="Hộp giấy 2 ngăn fasdfsa" />
            <div className="text-[1.6rem] star-color my-[0.3rem]">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="price-color text-[1.6rem] font-bold flex justify-between items-center">
                <span>250.000đ</span>
            </div>
        </Card>
    );
}

export default CardProductRecomment;
