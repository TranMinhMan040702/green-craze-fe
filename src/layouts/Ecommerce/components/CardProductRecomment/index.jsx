import './cardProductRecomment.scss';
import Card from 'antd/es/card/Card';
import Meta from 'antd/es/card/Meta';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Rate } from 'antd';
import { numberFormatter } from '../../../../utils/formatter';

function CardProductRecomment({ product }) {
    return (
        <Card
            className="flex items-center card-recomment mb-[1.5rem] cursor-pointer"
            cover={
                <img
                    className="w-[90px] object-cover"
                    src={product?.images?.find((v) => v.isDefault)?.image}
                />
            }
        >
            <Meta title={product?.name} />
            <div className="text-[1.6rem] star-color my-[0.3rem]">
                <Rate
                    disabled
                    value={product?.rating}
                    character={() => <FontAwesomeIcon icon={faStar} />}
                />
            </div>
            <div className="price-color text-[1.6rem] font-bold flex justify-between items-center">
                <span>
                    {numberFormatter(
                        product?.variants?.reduce((prev, curr) =>
                            prev.itemPrice < curr.itemPrice ? prev : curr,
                        )?.itemPrice,
                    )}
                </span>
            </div>
        </Card>
    );
}

export default CardProductRecomment;
