import './cardProduct.scss';
import images from '../../../../assets/images';
import Meta from 'antd/es/card/Meta';
import Card from 'antd/es/card/Card';
import { Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function CardProduct() {
    return (
        <Card
            hoverable
            className="card-product"
            style={{
                width: '100%',
            }}
            cover={<img alt="product" src={images.product} />}
        >
            <Meta title="Hộp giấy 2 ngăn Fest Bio" />
            <div className="text-[1.6rem] star-color my-[0.3rem]">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="price text-[2rem] font-bold flex justify-between items-center">
                <span className="price-color">250.000đ</span>
                <Tooltip placement="bottom" title="Thêm vào giỏ hàng">
                    <FontAwesomeIcon
                        className="primary-color transition-all delay-[0.3] text-[2.4rem]"
                        icon={faCartPlus}
                    />
                </Tooltip>
            </div>
        </Card>
    );
}

export default CardProduct;
